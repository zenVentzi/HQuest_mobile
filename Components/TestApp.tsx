/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/emin93/react-native-template-typescript
 *
 * @format
 */

import React, { Fragment, Component } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

export default class TestApp extends Component {
  render() {
    return (
      <Fragment>
        <ScrollView>
          <View style={{ height: 10000, backgroundColor: 'red' }}>
            <ScrollView
              nestedScrollEnabled
              contentContainerStyle={{
                marginTop: '50%',
                maxHeight: 50,
                backgroundColor: 'blue',
                flexDirection: 'column',
                flexWrap: 'wrap',
              }}>
              {/* <View
                style={{
                  marginTop: 50,
                  height: 300,
                  backgroundColor: 'yellow',
                }}
              /> */}
              <Text>asassa</Text>
              <Text>asassa</Text>
              <Text>asassa</Text>
              <Text>asassa</Text>
              <Text>asassa</Text>
              <Text>asassa</Text>
            </ScrollView>
          </View>
        </ScrollView>
      </Fragment>
    );
  }
}
// export default class TestApp extends Component {
//   render() {
//     console.log(`blalal`);
//     return (
//       <Fragment>
//         <StatusBar barStyle="dark-content" />
//         <SafeAreaView>
//           <ScrollView
//             contentInsetAdjustmentBehavior="automatic"
//             style={styles.scrollView}>
//             {/* <Header /> */}
//             {global.HermesInternal == null ? null : (
//               <View style={styles.engine}>
//                 <Text style={styles.footer}>Engine: Hermes</Text>
//               </View>
//             )}
//             <View style={styles.body}>
//               <View style={styles.sectionContainer}>
//                 <Text style={styles.sectionTitle}>Step One1</Text>
//                 <Text style={styles.sectionDescription}>
//                   Edit <Text style={styles.highlight}>App.tsx</Text> to change
//                   this screen and then come back to see your edits.
//                 </Text>
//               </View>
//               <View style={styles.sectionContainer}>
//                 <Text style={styles.sectionTitle}>See Your Changes</Text>
//                 <Text style={styles.sectionDescription}>
//                   <ReloadInstructions />
//                 </Text>
//               </View>
//               <View style={styles.sectionContainer}>
//                 <Text style={styles.sectionTitle}>Debug</Text>
//                 <Text style={styles.sectionDescription}>
//                   <DebugInstructions />
//                 </Text>
//               </View>
//               <View style={styles.sectionContainer}>
//                 <Text style={styles.sectionTitle}>Learn More</Text>
//                 <Text style={styles.sectionDescription}>
//                   Read the docs to discover what to do next:
//                 </Text>
//               </View>
//               {/* <LearnMoreLinks /> */}
//             </View>
//           </ScrollView>
//         </SafeAreaView>
//       </Fragment>
//     );
//   }
// }

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: Colors.lighter,
  },
  engine: {
    position: 'absolute',
    right: 0,
  },
  body: {
    backgroundColor: Colors.white,
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: Colors.black,
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    color: Colors.dark,
  },
  highlight: {
    fontWeight: '700',
  },
  footer: {
    color: Colors.dark,
    fontSize: 12,
    fontWeight: '600',
    padding: 4,
    paddingRight: 12,
    textAlign: 'right',
  },
});
