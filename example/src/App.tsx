import * as React from 'react';

import { StyleSheet, View, Text } from 'react-native';
import { Digio, Environment } from '@digiotech/react-native';
import type { GatewayEvent } from '@digiotech/react-native';

export default function App() {
  React.useEffect(() => {
    const digio = new Digio({ environment: Environment.SANDBOX });

    const digioGatewayEventSubscription = digio.addGatewayEventListener(
      (event: GatewayEvent) => {
        console.log(event);
      }
    );
    digio
      .start(
        'DID240111104030438QVCQB2LZFI9M4C',
        'akash.kumar@digio.in',
        'GWT240111104031237TRWYZV26R1QXEX'
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
