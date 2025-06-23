import React from 'react';
import { StyleSheet, View, Text, PermissionsAndroid, Platform } from 'react-native';
import { WebView, WebViewMessageEvent } from 'react-native-webview';

const ARScreen = () => {
  const [hasPermission, setHasPermission] = React.useState<boolean | null>(null);

  React.useEffect(() => {
    const requestCameraPermission = async () => {
      if (Platform.OS === 'android') {
        try {
          const granted = await PermissionsAndroid.request(
            PermissionsAndroid.PERMISSIONS.CAMERA,
            {
              title: "Yêu cầu quyền truy cập Camera",
              message: "WaiEdu cần truy cập camera của bạn để hiển thị nội dung AR.",
              buttonNeutral: "Hỏi lại sau",
              buttonNegative: "Hủy bỏ",
              buttonPositive: "Đồng ý",
            },
          );
          if (granted === PermissionsAndroid.RESULTS.GRANTED) {
            setHasPermission(true);
          } else {
            setHasPermission(false);
          }
        } catch (err) {
          console.warn(err);
          setHasPermission(false);
        }
      } else {
        // Handle iOS permissions later
        setHasPermission(true);
      }
    };
    requestCameraPermission();
  }, []);

  const onMessage = (event: WebViewMessageEvent) => {
    console.log('[AR-STATUS]', event.nativeEvent.data);
  };

  if (hasPermission === null) {
    return <View style={styles.center}><Text>Đang yêu cầu quyền camera...</Text></View>;
  }
  if (hasPermission === false) {
    return <View style={styles.center}><Text>Không có quyền truy cập camera.</Text></View>;
  }
  
  // For Android, we load the local HTML file from the assets directory.
  // For iOS, this path would be different and require adding the folder to the Xcode project.
  const webviewSource = { uri: 'file:///android_asset/ar_content/index.html' };

  return (
    <WebView
      style={styles.container}
      originWhitelist={['*']}
      source={webviewSource}
      onMessage={onMessage}
      javaScriptEnabled={true}
      domStorageEnabled={true}
      allowFileAccess={true}
      allowUniversalAccessFromFileURLs={true}
      allowsInlineMediaPlayback={true}
      mediaPlaybackRequiresUserAction={false}
      mediaCapturePermissionGrantType="grant"
      androidLayerType="hardware"
      onError={(event) => console.error(`[WebView ERROR]`, event.nativeEvent)}
      onHttpError={(event) => console.error(`[WebView HTTP ERROR] ${event.nativeEvent.statusCode}`, event.nativeEvent)}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  center: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  }
});

export default ARScreen; 