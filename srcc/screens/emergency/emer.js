import React, { Component } from "react";
import { StyleSheet, View } from "react-native";
import MaterialCardBasic1 from "./MaterialCardBasic1";
import Butt from "./CupertinoButtonDanger";
//import MaterialFixedLabelTextbox from "./MaterialFixedLabelTextbox";


function Emers(props) {
  return (
    <View style={styles.container}>
      <MaterialCardBasic1
        style={styles.materialCardBasic1}
      ></MaterialCardBasic1>

      {/* <MaterialFixedLabelTextbox
        style={styles.materialFixedLabelTextbox}
      ></MaterialFixedLabelTextbox> */}
      <Butt
        style={styles.cupertinoButtonDanger}
      ></Butt>
      {/* <MaterialHelperTextBox2
        style={styles.materialHelperTextBox2}
      ></MaterialHelperTextBox2> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  materialCardBasic1: {
    width: 375,
    height: 282,
    marginTop: 0
  },
  cupertinoButtonDanger: {
    width: 285,
    height: 44,
    marginTop: 181,
    alignSelf: "center"
  },
  materialFixedLabelTextbox: {
    width: 363,
    height: 43,
    marginTop: -213,
    marginLeft: 12
  },
  materialHelperTextBox2: {
    width: 363,
    height: 90,
    marginLeft: 12
  }
});
export default Emers;