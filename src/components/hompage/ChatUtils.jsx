import React, { useEffect } from 'react';
import { ZIMKitManager, Common } from '@zegocloud/zimkit-react';
import '@zegocloud/zimkit-react/index.css';

const ChatUtils = () => {
  const appConfig = {
    appID: 1043647705, // The AppID you get from the ZEGOCLOUD admin console.
    serverSecret: 'f61a5656563bc2240b9f50fa15735b9a', // The serverSecret you get from ZEGOCLOUD Admin Console.
  };

  const userInfo = {
    userID: '000001', // Your ID as a user.
    userName: 'Chigozzdev', // Your name as a user.
    userAvatarUrl: 'https://www.pngmart.com/files/22/User-Avatar-Profile-PNG.png', // The image you set as a user avatar must be network images. e.g., https://storage.zego.im/IMKit/avatar/avatar-0.png
  };

  useEffect(() => {
    const initZIMKit = async () => {
      const zimKit = new ZIMKitManager();
      const token = zimKit.generateKitTokenForTest(
        appConfig.appID,
        appConfig.serverSecret,
        userInfo.userID
      );
      await zimKit.init(appConfig.appID);
      await zimKit.connectUser(userInfo, token);
    };

    initZIMKit();
  }, []);

  return <Common />;
};

export default ChatUtils;
