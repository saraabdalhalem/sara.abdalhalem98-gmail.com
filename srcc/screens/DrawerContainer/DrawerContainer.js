import React from 'react';
import { View } from 'react-native';
import PropTypes from 'prop-types';
import styles from './styles';
import MenuButton from '../../components/MenuButton/MenuButton';

export default class DrawerContainer extends React.Component {
  render() {
    const { navigation } = this.props;
    return (
      <View style={styles.content}>
        <View style={styles.container}>
          <MenuButton
            title="الرئيسية"
            source={require('./../../icons/home.png')}
            onPress={() => {
              navigation.navigate('Home');
              navigation.closeDrawer();
            }}
          />
          <MenuButton
            title="التصنيفات"
            source={require('./../../icons/category.png')}
            onPress={() => {
              navigation.navigate('Categories');
              navigation.closeDrawer();
            }}
          />
          <MenuButton
            title="البحث"
            source={require('./../../icons/search.png')}
            onPress={() => {
              navigation.navigate('Search');
              navigation.closeDrawer();
            }}
          />
           <MenuButton  
            title="الخريطة"
            source={require('./../../icons/map.png')}
            onPress={() => {
              navigation.navigate('الخريطة');
              navigation.closeDrawer();
            }}
          />
          <MenuButton  
            title="الطوارئ"
            source={require('./../../icons/emer.jpeg')}
            onPress={() => {
              navigation.navigate('طوارئ');
              navigation.closeDrawer();
            }}
          />
        </View>
      </View>
    );
  }
}

DrawerContainer.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired
  })
};
