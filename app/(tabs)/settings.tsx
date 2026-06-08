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



export default function settings(){
  return(
    <View  style={{flex: 1, backgroundColor: 'white',  flexDirection: "column"}} >
     <View style={styles.sectionHeader}  className='flex-between'>

            <View>
            <Text className='' style={{fontWeight: 500, fontSize: 24, padding: 10}}>
                Setting <span className='text-green-100'>Page</span>
            </Text>
            </View>
            <View className='border rounded-full bg-red-500 h-50' style={{width: 50, height: 50}}></View>
     </View>
     <View style={{flex: 3, backgroundColor: '', width: '50%'}}/>
     <View style={{flex: 2, backgroundColor: 'green', width: '50%'}}/>
    </View>
  )
}

