import { useRouter } from 'expo-router';
import { useState } from 'react';
import { Pressable, ScrollView, Text, View, Image, StyleSheet, SectionList } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 22
  },
  sectionHeader: {
    paddingTop: 2,
    paddingLeft: 10,
    paddingRight: 10,
    paddingBottom: 2,
    fontSize: 14,
    fontWeight: 'bold',
    backgroundColor: 'rgba(247, 247, 247, 1.0)',
  },
  item: {
    padding: 10,
    fontSize: 18,
    height: 44
  }
})



 const aliments = ()=>{
  return(
    <View  style={{flex: 1, backgroundColor: 'white',  flexDirection: "column"}} >
     
    </View>
  )
}

export default aliments;

