import * as React from 'react';

import { StyleSheet, View, Text } from 'react-native';
import { Digio, Environment } from '@digiotech/react-native';
import type { GatewayEvent } from '@digiotech/react-native';

export default function App() {
  React.useEffect(() => {
    const digio = new Digio({ environment: Environment.PRODUCTION });

    const digioGatewayEventSubscription = digio.addGatewayEventListener(
      (event: GatewayEvent) => {
        console.log(event);
      }
    );
    digio
      .start(
        'DID2401251523550761IG72R6M2DNG1X',
        'akash.kumar@digio.in',
        'GWT240125152355207UI8ULB4B4B4HJY'
      )
      .then((res) => {
        console.log(res);
      })
      .catch((err) => console.error(err));

    return () => {
      digioGatewayEventSubscription.remove();
    };
  }, []);

  return (
    <View style={styles.container}>
      <Text>Digio Starting</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  box: {
    width: 60,
    height: 60,
    marginVertical: 20,
  },
});
