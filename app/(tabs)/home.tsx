import { useRouter } from 'expo-router';
import { useState } from 'react';
import { Pressable, ScrollView, Text, View, Image, StyleSheet, SectionList, TouchableOpacity } from 'react-native';
import ScreenWrapper from '../components/ScreenWrapper';

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
  },
  cards: {
    backgroundColor: 'white',
    borderRadius: 16,
    height: 150, margin: 15, padding: 10, overflow: 'hidden', flexDirection: 'column',
  },
  shadowProp: {
    // Pour ios
    shadowColor: '#171717',
    shadowOffset: { width: 0, height: 4},
    shadowOpacity: 0.1,
    shadowRadius: 6,

    // Pour android
    elevation: 8
  }
})



export default function menu(){
  return(
    <ScreenWrapper>
         <View  style={{flex: 1, backgroundColor: 'white',   flexDirection: "column"}} >
          {/* Card Hero */}
          <TouchableOpacity 
          style={[styles.cards, styles.shadowProp]}
          >
            
            {/* Titre */}
            <View className=' h-full  flex-col justify-between p-2'>
              <Text className='font-bold text-xl'>34 Jours | 5 000 Kcal</Text>
              <View className='w-[49%] flex-row justify-between  px-2'>
                <Text>30</Text>
                <Text>31</Text>
                <View
                style={{borderColor: '#859F3D'}} 
                className='border rounded-full w-9 h-9  flex-row items-center  justify-center'><Text>01</Text></View>
                <Text>02</Text>
              </View>
            </View>
            {/* Picture */}
            <Image 
            source={require('../../assets/images/plat.png')}
            className=' absolute top-6 right-[-11] w-64 h-36 '
            resizeMode='contain'
            />
          </TouchableOpacity>
        </View>
    </ScreenWrapper>
   
  )
}

