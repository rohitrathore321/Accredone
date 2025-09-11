import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import CustomHeader from '../../components/customheader'
import { useAppTheme } from '../../hooks/colorTheme';
import { Card, Icon, IconButton } from 'react-native-paper';
import { appColorsCode } from '../../styles/appColorsCode';
import CustomIconButton from '../../components/customIconButton';
import globalStyles from '../../styles/globalStyles';

const MyCase = ({ navigation }: any) => {
  const theme = useAppTheme();
  const styles = getStyles(theme);

  return (
    <View style={styles.container}>
      <CustomHeader
        showBackIcon={true}
        onPress={() => navigation.goBack()}
        title="My Cases"
        showRightIcon={false}
        showProfile={false}
      />
      <View style={{ flex: 1, marginHorizontal: 16, }}>

        <View style={styles.cardBox}>
          <Card style={styles.card}>
            <Card.Content style={{ alignItems: 'center' }}>
              <Icon source="folder" size={25} color={theme.primary} />
              <Text style={[styles.txt, { marginTop: 5 }]}>12</Text>
              <Text style={[styles.txt, { fontFamily: 'Poppins-Regular' }]}>open</Text>
            </Card.Content>
          </Card>
          <Card style={styles.card}>
            <Card.Content style={{ alignItems: 'center' }}>
              <Icon source="clock" size={25} color={theme.primary} />
              <Text style={[styles.txt, { marginTop: 5 }]}>12</Text>
              <Text style={[styles.txt, { fontFamily: 'Poppins-Regular' }]}>In Progress</Text>
            </Card.Content>
          </Card>
          <Card style={styles.card}>
            <Card.Content style={{ alignItems: 'center' }}>
              <Icon source="check-circle" size={25} color={appColorsCode.green} />
              <Text style={[styles.txt, { marginTop: 5 }]}>12</Text>
              <Text style={[styles.txt, { fontFamily: 'Poppins-Regular' }]}>Resolved</Text>
            </Card.Content>
          </Card>
        </View>

        <Card style={styles.menuCard} onPress={() => navigation.navigate('CaseDetails')}>


          <Card.Content style={globalStyles.centerContent}>
            <View style={globalStyles.alignIcon}>
              <CustomIconButton iconName={'check-circle'} onPress={() => { }} height={60} width={60} />
              <View style={{ marginLeft: 12 }}>
                <Text style={styles.txt}>{'item'}</Text>
                <Text style={[styles.txt, { fontFamily: 'Poppins-Regular' }]}>{'item.sub'}</Text>
                <Text style={[styles.txt, { fontFamily: 'Poppins-Regular' }]}>{'item.sub'}</Text>
              </View>
            </View>


            <IconButton icon="chevron-right" size={25} iconColor={theme.text} />
          </Card.Content>
          <Card.Content style={{ justifyContent: 'flex-end', flexDirection: 'row', right: 0 }}>
            <View style={{ justifyContent: 'flex-end', flexDirection: 'row', right: 20, }}>
              <View style={[styles.tag, { backgroundColor: "#e0f2fe" }]}>
                <Text style={styles.txt}>{'item'}</Text>
              </View>
            </View>
            <Text style={[styles.txt, { fontFamily: 'Poppins-Light' }]}>{'message 7'}</Text>
          </Card.Content>
        </Card>
      </View>

    </View>
  )
}

export default MyCase

const getStyles = (theme: any) =>
  StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: theme.background,
    },
    cardBox: {
      flexDirection: 'row',
      justifyContent: 'space-between',
    },
    card: {
      width: '30%',
      height: 120,
      justifyContent: 'center',
      backgroundColor: theme.card,
      borderRadius: 15,
    },
    txt: {
      color: theme.text,
      fontFamily: 'Poppins-Regular',
      // textAlign: 'center',
      fontSize: 14,
    },
    menuCard: {
      marginVertical: 6,
      borderRadius: 15,
      elevation: 5,
      backgroundColor: theme.card,
    },
    tag: {
      paddingVertical: 3,
      paddingHorizontal: 8,
      borderRadius: 15,
    },
  })