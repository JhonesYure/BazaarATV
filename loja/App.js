import React, {Component} from 'react';
import { SafeAreaView, ScrollView, StatusBar, StyleSheet, Text, useColorScheme, View, Image,TouchableOpacity,Touchable } from 'react-native';
import estilo from './src/Estilos/style';

export default class App extends Component 
{
  render() 
  {
    return (
      <ScrollView style={[estilo.back]}>
        {/* MENU */}
        <View style={[estilo.backmenu]}>
          <Text style={[estilo.titulo]}>Bazaar</Text>
        </View> 
        {/*IMAGEM MENU*/}
        <View>
          <Image style={[estilo.fundo]} source={require('./src/Imagens/fundo.png')}></Image>
        </View>
        {/*MODA FEMININA*/}
        <View>
          <Text style={[estilo.moda]}>Moda Feminina</Text>
        </View>
        <View style={[estilo.container]}>
          <View>
            <TouchableOpacity>
            <Image style={[estilo.imgfem]} source={require('./src/Imagens/vestido1.png')}></Image>
            <Text style={[estilo.descricao]}>Vestido</Text>
            <Text style={[estilo.descricao]}>R$ 170,00</Text>
            </TouchableOpacity>
          </View>
          <View>
            <TouchableOpacity>
            <Image style={[estilo.imgfem]} source={require('./src/Imagens/vestido2.png')}></Image>
            <Text style={[estilo.descricao]}>Vestido</Text>
            <Text style={[estilo.descricao]}>R$ 220,00</Text>
            </TouchableOpacity>
          </View>
          <View>
            <TouchableOpacity>
            <Image style={[estilo.imgfem]} source={require('./src/Imagens/vestido3.png')}></Image>
            <Text style={[estilo.descricao]}>Vestido</Text>
            <Text style={[estilo.descricao]}>R$ 290,00</Text>
            </TouchableOpacity>
          </View>
        </View>
        {/*MODA MASCULINA*/}
        <View>
          <Text style={[estilo.moda]}>Moda Masculina</Text>
        </View>
        <View style={[estilo.container]}>
        <View>
          <TouchableOpacity>
            <Image style={[estilo.imgfem]} source={require('./src/Imagens/camisa1.png')}></Image>
            <Text style={[estilo.descricao]}>Camisa</Text>
            <Text style={[estilo.descricao]}>R$ 99,00</Text>
          </TouchableOpacity>
          </View>
          <View>
            <TouchableOpacity>
            <Image style={[estilo.imgfem]} source={require('./src/Imagens/camisa2.png')}></Image>
            <Text style={[estilo.descricao]}>Camisa</Text>
            <Text style={[estilo.descricao]}>R$ 149,00</Text>
            </TouchableOpacity>
          </View>
          <View>
            <TouchableOpacity>
            <Image style={[estilo.imgfem]} source={require('./src/Imagens/camisa3.png')}></Image>
            <Text style={[estilo.descricao]}>Camisa</Text>
            <Text style={[estilo.descricao]}>R$ 179,00</Text>
            </TouchableOpacity>
          </View>
        </View>
        {/*DESCRIÇÃO*/}
        <View>
          <Text style={[estilo.bemvindo]}>Bem vindos ao BAZAAR</Text>
        </View>
        <View style={[estilo.container]}>
          <Text style={[estilo.info]}>
          Nossos produtos são inspirados pelas pessoas que estão à nossa volta, com suas belezas e qualidades. 
          Produtos de bom gosto especificamente para você.
          Descubra Our Story e aproveite as promoções.
          </Text>
        </View>
        {/*LOCALIZAÇÃO*/}
        <View style={[estilo.txtmaps]}>
          <Text style={[estilo.txtmaps]}>Rua Riachuelo, 1245</Text>
          <Text style={[estilo.txtmaps]}>Centro, Porto Alegre</Text>
          <Text style={[estilo.txtmaps]}>Aberto de seg a sex das 10h à 21h</Text>
        </View>
        <View>
          <TouchableOpacity>
          <Image style={[estilo.maps]} source={require('./src/Imagens/maps.png')}></Image>
          </TouchableOpacity>
        </View>
        
      </ScrollView>
    )
  }
}





