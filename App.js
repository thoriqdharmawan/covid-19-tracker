import React from 'react';
import { StyleSheet, Text, View, ImageBackground, Image, ScrollView } from 'react-native';
import Covid from './assets/corona.jpg'
import merah from './assets/merah.jpg'
import biru from './assets/biru.jpg'
import abu from './assets/abu.jpg'
import wash from './assets/wash.jpg'

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <ImageBackground source={Covid} style={styles.image}>
          <View style={styles.headerWrapeer}>
            <Text style={styles.title}>Covid Tracker</Text>
            <Text style={styles.countryTitle}>Indonesia</Text>
            <Text style={styles.title}>Pembaruan Tearkhir : 13 April 2020</Text>         
          </View>
        </ImageBackground>
      </View>
      <View style={styles.body}>
        <View  style={styles.toTop}>
          <View style={styles.contentWrapper}>
            <View style={styles.box}>
              <Text style={styles.label}>Terkonfirmasi</Text>
              <Text style={styles.red}>9240</Text>
              <Image
                style={styles.img}
                source={merah} />
            </View>
            <View style={styles.box}>
              <Text style={styles.label}>Sembuh</Text>
              <Text style={styles.blue}>1096</Text>
              <Image
                style={styles.img}
                source={biru} />
            </View>
          </View>
          <View style={styles.contentWrapper}>
          <View style={styles.box}>
              <Text style={styles.label}>Meninggal</Text>
              <Text style={styles.grey}>331</Text>
              <Image
                style={styles.img}
                source={abu} />
            </View>
            <View style={styles.box}>
              <Image
                style={styles.img2}
                source={wash} 
                />
            </View>
          </View>
        </View>
        <ScrollView style={styles.scroll}>
          <View style={styles.list}>
            <Text style={styles.country} >Indonesia</Text>
          </View>
          <View style={styles.list}>
            <Text style={styles.country} >Indonesia</Text>
          </View>
          <View style={styles.list}>
            <Text style={styles.country} >Indonesia</Text>
          </View>
          <View style={styles.list}>
            <Text style={styles.country} >Indonesia</Text>
          </View>
          <View style={styles.list}>
            <Text style={styles.country} >Indonesia</Text>
          </View>
          <View style={styles.list}>
            <Text style={styles.country} >Indonesia</Text>
          </View>
          <View style={styles.list}>
            <Text style={styles.country} >Indonesia</Text>
          </View>
          <View style={styles.list}>
            <Text style={styles.country} >Indonesia</Text>
          </View>
        </ScrollView>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: '#fff',
    height: '100%'
  },
  header: {
    height: '35%',
    width: '100%',
  },  
  headerWrapeer: {
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    display: 'flex',
    padding: 30
  },  
  image: {
    width: '100%',
    height: '100%',
  },
  title: {
    color: '#fff',
  },
  countryTitle: {
    color: '#fff',
    fontSize: 28,
    marginTop: 4,
    marginBottom: 2,
    fontWeight: '600'
  },
  body: {
    backgroundColor: '#f8f8f8',
    width: '100%',
    height: '65%',
    display: 'flex',
    flexDirection: 'column',
    padding: 30
  },
  toTop: {
    display: 'flex',
    flexDirection: 'column',
    marginTop: '-90px'
  },
  contentWrapper: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 18
  }, 
  box: {
    width: '45%',
    height: 100,
    backgroundColor: '#fff',
    shadowColor: "rgba(0, 0, 0, 0.5)",
    shadowRadius: 5,
    elevation: 2,
    shadowOpacity: 0.25,
    borderRadius: 4,
    display: 'flex',
    flexDirection: 'column',
    justifyContent:'center',
    paddingTop: 10,
    paddingRight: 10,
    paddingLeft: 10,
  },
  label: {
    fontSize: 12,
    color: 'rgb(169, 168, 168)',
    fontWeight: '600'
  },
  img: {
    width: '100%',
    height: '40px',
    position: 'relative',
    bottom: 0,
  },
  img2: {
    width: '100%',
    height: '100%',
  },
  red: {
    color: 'red',
    fontSize: 22,
    fontWeight: '600'
  },
  blue: {
    color: 'blue',
    fontSize: 22,
    fontWeight: '600'
  },
  grey: {
    color: 'grey',
    fontSize: 22,
    fontWeight: '600'
  },
  scroll: {
    marginTop: 20,
    height: '20vh'
  },
  list: {
    backgroundColor: '#fff',
    borderRadius: 4,
    padding: 8,
    marginBottom: 10
  },
  country: {
    color: '#000',
    textAlign: 'center'
  }
});
