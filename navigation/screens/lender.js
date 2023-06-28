import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Dropdown } from 'react-native-element-dropdown';
import AntDesign from '@expo/vector-icons/AntDesign';
import { SafeAreaView } from 'react-native-safe-area-context';


//choose your lender screen
const popularity = [
  { label: 'Most popular', value: '1' },
  { label: 'Least popular', value: '2' },
];
const duration = [
  { label: '3 months', value: '1' },
  { label: '6 months', value: '6' },
  { label: '9 months', value: '9' },
  { label: '12 months', value: '12' },
  { label: '18 months', value: '18' },
  { label: '24 months', value: '24' },
];
const rate = [
  { label: 'Ascending', value: '1' },
];

const DropdownComponent = () => {
  const [popularityValue, setPopularityValue] = useState(null);
  const [durationValue, setDurationValue] = useState(null);
  const [rateValue, setRateValue] = useState(null);
  const [isFocus, setIsFocus] = useState(false);

  const renderLabel = () => {
    if (popularityValue || durationValue || rateValue || isFocus) {
      return (
        <Text style={[styles.label, isFocus && { color: 'blue' }]}>
          Dropdown label
        </Text>
      );
    }
    return null;
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.headerText}>Choose Your Lender</Text>

      <View style={styles.rowContainer}>
        <View style={styles.columnContainer}>
          <Text style={styles.label}>Popularity</Text>
          <Dropdown
            style={[styles.dropdown, isFocus && { borderColor: 'blue' }]}
            placeholderStyle={styles.placeholderStyle}
            selectedTextStyle={styles.selectedTextStyle}
            inputSearchStyle={styles.inputSearchStyle}
            iconStyle={styles.iconStyle}
            data={popularity}
            maxHeight={400}
            labelField="label"
            valueField="value"
            placeholder={!isFocus ? 'Most popular' : '...'}
            value={popularityValue}
            onFocus={() => setIsFocus(true)}
            onBlur={() => setIsFocus(false)}
            onChange={item => {
              setPopularityValue(item.value);
              setIsFocus(false);
            }}
          />
        </View>

        <View style={styles.columnContainer}>
          <Text style={styles.label}>Duration</Text>
          <Dropdown
            style={[styles.dropdown, isFocus && { borderColor: 'blue' }]}
            placeholderStyle={styles.placeholderStyle}
            selectedTextStyle={styles.selectedTextStyle}
            inputSearchStyle={styles.inputSearchStyle}
            iconStyle={styles.iconStyle}
            data={duration}
            maxHeight={400}
            labelField="label"
            valueField="value"
            placeholder={!isFocus ? '3 months' : '...'}
            value={durationValue}
            onFocus={() => setIsFocus(true)}
            onBlur={() => setIsFocus(false)}
            onChange={item => {
              setDurationValue(item.value);
              setIsFocus(false);
            }}
          />
        </View>

        <View style={styles.columnContainer}>
          <Text style={styles.label}>Interest Rate</Text>
          <Dropdown
            style={[styles.dropdown, isFocus && { borderColor: 'blue' }]}
            placeholderStyle={styles.placeholderStyle}
            selectedTextStyle={styles.selectedTextStyle}
            inputSearchStyle={styles.inputSearchStyle}
            iconStyle={styles.iconStyle}
            data={rate}
            maxHeight={400}
            labelField="label"
            valueField="value"
            placeholder={!isFocus ? 'Ascending' : '...'}
            value={rateValue}
            onFocus={() => setIsFocus(true)}
            onBlur={() => setIsFocus(false)}
            onChange={item => {
              setRateValue(item.value);
              setIsFocus(false);
            }}
          />
        </View>
      </View>
      <View style={styles.boxContainer}>
      <Text style={styles.subheader}>Lowest Interest Rate</Text>
      <View style={styles.emptyBox}>
          <Text style={styles.boxheader}>Ross Geller</Text>
          <Text style={styles.boxbody}>Interest rate</Text>
          <Text style={styles.boxpercent}>3.01%</Text>
          <Text style={styles.boxbody}>Amount to receive:<Text style={styles.highlight}>₱2,450</Text></Text>
          <Text style={styles.boxbody}>Payment duration:<Text style={styles.highlight}>3 months</Text></Text>
          <View style={styles.contactbg}>
          <Text style={styles.boxcontact}>Contact Ross</Text>
          </View>
      </View>
      </View>
      <View style={styles.copy}>
      <View style={styles.boxContainer1}>
      <Text style={styles.subheader1}>Other Rates</Text>
      <View style={styles.empty}>
          <Text style={styles.boxheader1}>Chandler Bing</Text>
          <Text style={styles.boxbody}>Interest rate</Text>
          <Text style={styles.boxpercent1}>4.00%</Text>
          <Text style={styles.boxbody}>Amount to receive:</Text>
          <Text style={styles.texthighlight}>₱2,450</Text>
          <Text style={styles.boxbody}>Payment duration:</Text>
          <Text style={styles.texthighlight}>3 months</Text>
      </View>
      </View>
        
      
      <View style={styles.boxContainer1}>
      <Text style={styles.subheader1}></Text>
      <View style={styles.empty}>
          <Text style={styles.boxheader1}>Monica Geller</Text>
          <Text style={styles.boxbody}>Interest rate</Text>
          <Text style={styles.boxpercent1}>4.00%</Text>
          <Text style={styles.boxbody}>Amount to receive:</Text>
          <Text style={styles.texthighlight}>₱2,450</Text>
          <Text style={styles.boxbody}>Payment duration:</Text>
          <Text style={styles.texthighlight}>3 months</Text>
      </View>
      </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    padding: 16,
    marginTop: 20,
  },
  headerText: {
    fontSize: 35,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  subheader: {
    fontSize: 15,
    fontWeight: 'bold',
    marginBottom: 10,
    marginLeft: -200,
  },
  boxheader: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
    margin: 20,
  },
  boxheader1: {
    fontSize: 20,
    fontWeight: 'bold',
    marginLeft: 20,
    marginBottom: 5,
  },
  boxbody: {
    fontSize: 15,
    fontWeight: 'bold',
    marginTop: -5,
    marginLeft: 20,
    color: 'grey',
  },
  boxpercent: {
    fontSize: 40,
    fontWeight: '900',
    marginLeft: 20,
    color: '#004479',
    marginBottom: 10,
  }, 
  boxpercent1: {
    fontSize: 40,
    fontWeight: '900',
    marginLeft: 20,
    color: '#ffb81c',
  }, 
  boxcontact: {
    fontSize: 15,
    textAlign: 'right',
    color: '#004479',
    fontWeight: 500,
  },
  highlight: {
    color: '#004479',
  },
  texthighlight:{
    fontSize: 15,
    fontWeight: 'bold',
    marginTop: -5,
    marginLeft: 20,
    color: 'grey',
    color: '#ffb81c',
  },
  contactbg:{
    backgroundColor: '#cedff2',
    padding: 'auto',
    borderRadius: 15,
    width: 130,
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 190,
    marginTop: -150,
  },
  rowContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  columnContainer: {
    flex: 1,
    marginRight: 10,
  },
  dropdown: {
    height: 50,
    borderColor: 'gray',
    borderWidth: 0.5,
    borderRadius: 8,
    paddingHorizontal: 8,
  },
  label: {
    fontSize: 16,
    marginBottom: 8,
  },
  placeholderStyle: {
    fontSize: 12,
    color: 'grey',
  },
  selectedTextStyle: {
    fontSize: 12,
  },
  iconStyle: {
    width: 20,
    height: 20,
  },
  inputSearchStyle: {
    height: 40,
    fontSize: 12,
  },
  emptyBox: {
    width: 340,
    height: 200,
    backgroundColor: 'white',
    borderWidth: 1,
    borderColor: 'black',
    borderRadius: 15,
  },
  empty: {
    width: 340,
    height: 300,
    backgroundColor: 'white',
    borderColor: 'black',
    borderRadius: 15,
  },
  subheader1:{
    fontSize: 15,
    fontWeight: 'bold',
    marginLeft: -250,
    marginTop: 10,
    marginBottom: 15,
  },
  boxContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  boxContainer1: {
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: -150,
  },
  copy: {
    flexDirection: 'row',
  },
});

export default DropdownComponent;