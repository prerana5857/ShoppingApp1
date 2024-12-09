import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  TouchableOpacity,
  ScrollView,
  Image,
} from 'react-native';


const HomeScreen = ({navigation}) => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <ImageBackground
        source={{
          uri: 'https://s3-alpha-sig.figma.com/img/79ae/0546/a5b3b3a0d1aee4267015f773bfb0a349?Expires=1734912000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Qwxo2euYjsAm05bR3w2nAdbLtUZz1i0-1GLOPl1W8W--DyXu25HbSUxjNjmTEnB~pTeZ7yN8Fpn6U~vD7~AanzoLNFke13ZEgLJv1to4wbAyKQw6DiTlio~NSkDaWL4BVhk2uv2TCEkmKv0KWtL-6HVGJuTM1lG4tib2PM-rL0Ho-WzKckjhSg6zDauDf1JZ~L593Nss46g~cJASiBEOkJO-zK7Ruoew166sz9zAdd-eRukB-cJm2z2q2wnoD7hK3lUKWCDkuwbtF6tmuPyaC8ROOn1PyWlBprCDu5JOL9xBZ6GNztlme-SPy82ExSLd44h4fskGdc~bXgCFqd~o6Q__',
        }}
        style={styles.headerImage}>
        <View style={styles.overlay}>
          <Text style={styles.headerText}>Fashion Sale</Text>
          <TouchableOpacity
            style={styles.checkButton}
            onPress={() => navigation.navigate('FashionSale')}>
            <Text style={styles.checkButtonText}>Check</Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
      <View style={styles.newSection}>
        <Text style={styles.newTitle}>New</Text>
        <Text style={styles.viewAll} onPress={() => navigation.navigate('Shop')}>View all</Text>
      </View>
      <Text style={styles.subtitle}>You’ve never seen it before!</Text>

      <View style={styles.thumbnailContainer} onPress={() => navigation.navigate('ProductCardScreen')}>
        {[
          'https://s3-alpha-sig.figma.com/img/ff48/013c/2e83ffc52e71ad79aa63042d84df66ea?Expires=1734912000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=imT0Cnbo1dmbEr85IihQvmstsEZN0g01oNZX7FslMkRySFXRuHxoafaJyMImdIOmL77ljQB1TOUORvZ8YAP56MqSsq0rKdcl3AuUitiV6Cn0hZB0W5RnDLTYu5Qct6vgUc3UzwyIeaU2hGKtk0VStfwrMvGUtrupsbtDs4dG4xdrf5UHtyS6roEM-KAd1EvJM5bOhAA4UpmZNxoRCnW430eCkG3U9QAMX8cPxQsSNoflq0fOLpyjVx49~bQQcEtMBQQ1HGCKrN0czald3q9kPfotPVt5xQhlgsn4AqWOqpSpDc3KWWAms9SlMJ1E-3ZQIa~C7IFgBokyjFPjXGxdfA__',
          'https://s3-alpha-sig.figma.com/img/744c/af4f/8cbe22e0d501d66b730b03c24f793383?Expires=1734912000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Tg21OOsiMDH5ZXMRpTfQXZHEIo58UIGcM-AXVPUlAwPg4mNhZxrsR5M677BewJPahw8HNm62vh4OvS1zu4dA2Dqa03MmERlBCUTWsRIkuHiKLYPNWBauMjUYRohmJ05gzyXQNG~n6hALS8KUnPzZxpy4TJZZFCoke5oMXOQyBH2N4FHL0ZMphC9yRGTZQ0q8-Ym34cHkWJT1wq9d~aAhN7qnSrT015cN5y2fuTLaZVvSDwI6jOogjaL7813Qrx5XL9wca36yoVvRfHJaqwrmP3lXSBCLYWFLpI1ole-5kIj~Acm6QcQpfkAQ7uZaD8Fl~BXTd7eCAGh2wN5ozmUNrQ__',
          'https://s3-alpha-sig.figma.com/img/c8d6/cd3c/953d61faf9fd666897e97a67e9857028?Expires=1734912000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=d6bpXDtJKShYyFXc~e-yX545eszfhJOooNcq0pKpEIUQuIAHhOvir3GKASwkjotsh4O7GqgFMBgYjRUHFJqNMa5HOdzM4z4yvZzlvz3viPuVbMnpu~z~vVzaQtEgmuyIjYTyoT-l9VIZ2UhVRjT~51-kdPClZS7zmGAtnzZMpUmHdp65aDe6a3tNRR8qzufxwr3ydL0F4GUpq3c7X0ei4IPOAciRqOGpg9Xaaz3IwRGVg-PaRyAMmB5lw6O~VSNa-vFs2A0z~Hlt72ugz7bMO8igIqcQkNjkLctlYIqZ-eSDCfoQaoLlM9YbkGHJBwKHXV6Xm5H6Ei-47qc97Ud5Nw__',
        ].map((uri, index) => (
          <View key={index} style={styles.thumbnailWrapper}>
            <Image style={styles.thumbnail} source={{uri}} />
            <View style={styles.discountBadge}>
              <Text style={styles.discountText}>New</Text>
            </View>
          </View>
        ))}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: '#fff',
  },
  headerImage: {
    height: 536,
    width: 376,
    justifyContent: 'flex-end',
  },
  overlay: {
    backgroundColor: 'rgba(0,0,0,0.3)',
    padding: 40,
  },
  headerText: {
    color: '#fff',
    fontSize: 48,
    fontWeight: 'bold',
  },
  checkButton: {
    marginTop: 0,
    backgroundColor: '#DB3022',
    height: 36,
    width: 100,
    borderRadius: 35,
  },
  checkButtonText: {
    color: '#fff',
    fontSize: 20,
    marginRight: 5,
    marginLeft: 2,
    marginTop: 1,
    // fontWeight: 'bold',
    textAlign: 'center',
  },
  newSection: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  newTitle: {
    fontSize: 18,
    color: '#222222',
    fontWeight: 'bold',
  },
  subtitle: {
    marginLeft: 20,
    fontSize: 11,
  },
  viewAll: {
    marginTop: 10,
    color: '#9B9B9B',
    fontSize: 11,
    fontWeight: 'bold',
  },
  thumbnailContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: 20,
    display: 'flex',
    position: 'relative',
  },
  thumbnail: {
    width: 100,
    height: 150,
    borderRadius: 10,
  },
  discountBadge: {
    position: 'absolute',
    top: 5,
    // left: 5,
    backgroundColor: '#222222',
    marginTop: 5,
    marginLeft: 5,
    paddingVertical: 2,
    paddingHorizontal: 4,
    fontSize: 11,
    borderRadius: 20,
  },
  discountText: {
    color: '#FFF',
    fontWeight: 'bold',
    fontSize: 11,
  },
});

export default HomeScreen;
