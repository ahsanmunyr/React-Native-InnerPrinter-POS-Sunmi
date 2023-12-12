import {
  StyleSheet,
  Text,
  View,
  DeviceEventEmitter,
  TouchableOpacity,
} from 'react-native';
import React, {useEffect} from 'react';
import SunmiPrinter, {SunmiScan, AlignValue} from '@heasy/react-native-sunmi-printer';
const App = () => {
  const _printRecieve = () => {
    SunmiPrinter.setFontSize(30);
    SunmiPrinter.setFontWeight(true);
    SunmiPrinter.lineWrap(1);
    SunmiPrinter.setAlignment(AlignValue.CENTER);
    SunmiPrinter.printerText('VIPKIT');
    SunmiPrinter.lineWrap(2);
    SunmiPrinter.setAlignment(AlignValue.CENTER);
    SunmiPrinter.printerText('电子发票申请\n');
    SunmiPrinter.lineWrap(1);
    SunmiPrinter.printColumnsString(
      ['订单编号', '1231231231'],
      [60, 120],
      [AlignValue.LEFT, AlignValue.RIGHT],
    );
    SunmiPrinter.lineWrap(1);
    SunmiPrinter.printColumnsString(
      ['实付金额', `￥${200}`],
      [60, 120],
      [AlignValue.LEFT, AlignValue.RIGHT],
    );
    SunmiPrinter.lineWrap(1);
    SunmiPrinter.setAlignment(AlignValue.CENTER);
    SunmiPrinter.print2DCode(
      'https://qr.api.cli.im/newqr/create?data=https%253A%252F%252Fgithub.com%252FSurile%252Freact-native-sunmi-printer&level=H&transparent=false&bgcolor=%23FFFFFF&forecolor=%23000000&blockpixel=12&marginblock=1&logourl=&logoshape=no&size=260&kid=cliim&key=db8abf82a7306ec8f01d41c1155b0a9d',
      1,
      4,
      4,
    );
    SunmiPrinter.lineWrap(1);
    SunmiPrinter.setAlignment(AlignValue.CENTER);
    SunmiPrinter.printerText('扫码自助申请电子发票\n');
    SunmiPrinter.lineWrap(1);
    SunmiPrinter.printColumnsString(
      ['服务员', 'Surile'],
      [60, 120],
      [AlignValue.LEFT, AlignValue.RIGHT],
    );
    SunmiPrinter.lineWrap(1);
    SunmiPrinter.printColumnsString(
      ['打印时间', '2021-09-27'],
      [60, 120],
      [AlignValue.LEFT, AlignValue.RIGHT],
    );
    SunmiPrinter.lineWrap(3);
    // SunmiPrinter.cutPaper();
  };

  useEffect(() => {
    DeviceEventEmitter.addListener('onScanSuccess', msg => {
      console.log('result', msg);
    });
    return () => DeviceEventEmitter.removeAllListeners('onScanSuccess');
  }, []);

  return (
    <TouchableOpacity
      style={{
        height: 100,
        width: 100,
        justifyContent: 'center',
        alignItems: 'center', backgroundColor:'blue'
      }}
      onPress={_printRecieve}>
      <Text>App</Text>
    </TouchableOpacity>
  );
};

export default App;

const styles = StyleSheet.create({});
