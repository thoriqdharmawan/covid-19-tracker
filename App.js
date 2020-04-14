import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, ImageBackground, Image, ScrollView } from 'react-native';
import Covid from './assets/corona.jpg'
import merah from './assets/merah.jpg'
import biru from './assets/biru.jpg'
import abu from './assets/abu.jpg'
import wash from './assets/wash.jpg'

export default function App() {
  const [data, setData] = useState(null)
  const [countries, setCountries] = useState(null)
  const [state, setState] = useState("IDN")

  useEffect(() => {    
      fetch(`https://covid19.mathdro.id/api/countries/${state}/recovered`)
        .then((response) => response.json())
        .then((json) => {
          return (
              setData(json[0])
           );
        })
        .catch((error) => {
          console.error(error);
        });
        if(countries === null) {
          fetch('https://covid19.mathdro.id/api/countries')
            .then((response) => response.json())
            .then((json) => {
              return (
                setCountries(json.countries)
              )
            })
            .catch((error) => {
              console.error(error);
            });
        }
  }, [state])

  const newCountry = countries && countries.filter(country => country.iso3 !== 'IDN')

  let unix_timestamp = data && data.lastUpdate
  let date = new Date(unix_timestamp);

  const generateMonth = () => {
    if(date.getMonth()+1 === 1) 'Januari'
    else if(date.getMonth()+1 === 2) return  'Februari'
    else if(date.getMonth()+1 === 3) return  'Maret'
    else if(date.getMonth()+1 === 4) return  'April'
    else if(date.getMonth()+1 === 5) return  'Mei'
    else if(date.getMonth()+1 === 6) return  'Juni'
    else if(date.getMonth()+1 === 7) return  'Juli'
    else if(date.getMonth()+1 === 8)  return 'Agustus'
    else if(date.getMonth()+1 === 9)  return 'September'
    else if(date.getMonth()+1 === 10) return  'Oktober'
    else if(date.getMonth()+1 === 11) return  'November'
    else if(date.getMonth()+1 === 12) return  'Desember'
  }

  // Will display time in 10:30:23 format
  let formattedTime = date.getDate() + '/' + (generateMonth()) + '/' + date.getFullYear() + ' ' + date.getHours() + ':' + date.getMinutes();

  console.log(formattedTime);

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <ImageBackground source={Covid} style={styles.image}>
          <View style={styles.headerWrapeer}>
            <Text style={styles.title}>Covid Tracker</Text>
            <Text style={styles.countryTitle}>{data ? data.countryRegion : 'Loading'}</Text>
            <Text style={styles.time}>Pembaruan Tearkhir : {formattedTime}</Text>         
          </View>
        </ImageBackground>
      </View>
      <View style={styles.body}>
        <View  style={styles.toTop}>
          <View style={styles.contentWrapper}>
            <View style={styles.box}>
              <Text style={styles.label}>Terkonfirmasi</Text>
              <Text style={styles.red}>{data ? data.confirmed : 'Loading'}</Text>
              <Image
                style={styles.img}
                source={merah} />
            </View>
            <View style={styles.box}>
              <Text style={styles.label}>Sembuh</Text>
              <Text style={styles.blue}>{data ? data.recovered : 'Loading'}</Text>
              <Image
                style={styles.img}
                source={biru} />
            </View>
          </View>
          <View style={styles.contentWrapper}>
          <View style={styles.box}>
              <Text style={styles.label}>Meninggal</Text>
              <Text style={styles.grey}>{data ? data.deaths : 'Loading'}</Text>
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
          <View style={state === "IDN" ? styles.listSelected : styles.list}>
            <Text onPress={() => setState('IDN')} style={state === "IDN" ? styles.countrySelected : styles.country} >Indonesia</Text>
          </View>
          
          {newCountry && newCountry.map((res, i) => {
            return (
              <View key={i} style={state === `${res.iso3}` ? styles.listSelected : styles.list}>
                <Text onPress={() => setState(`${res.iso3}`)} style={state === `${res.iso3}` ? styles.countrySelected : styles.country}>{res.name}</Text>
              </View>
            )
          })}
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
    padding: 30,
  },  
  image: {
    width: '100%',
    height: '100%',
  },
  title: {
    color: '#fff',
    marginTop: 20
  },
  time: {
    color: '#fff',
  },
  countryTitle: {
    color: '#fff',
    fontSize: 28,
    marginTop: 4,
    marginBottom: 2,
    fontWeight: '700',
    lineHeight: 30
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
    marginTop: -90
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
    height: 40,
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
    height: 50
  },
  list: {
    backgroundColor: '#fff',
    borderRadius: 4,
    padding: 8,
    marginBottom: 10
  },
  listSelected: {
    backgroundColor: '#dbdbdb',
    borderRadius: 4,
    padding: 8,
    marginBottom: 10,
  },
  country: {
    color: '#000',
    textAlign: 'center'
  },
  countrySelected: {
    color: '#000',
    textAlign: 'center',
  }
});
