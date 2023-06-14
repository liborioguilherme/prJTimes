import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  Modal,
} from 'react-native';
import { ScrollView } from 'react-native';

export default function App() {
  const [modalVisible, setModalVisible] = useState(false);
  const [infoTimeSelecionado, setInfoTimeSelecionado] = useState(null);
  const [infoTime, setInfoTime] = useState([{
    imagem: require('./assets/Corinthians.png'),
    nome: "SC Corinthians Paulista",
    descricao: "O Sport Club Corinthians Paulista é um clube poliesportivo brasileiro da cidade de São Paulo, capital do estado de São Paulo. Foi fundado como uma equipe de futebol por um grupo de operários do bairro Bom Retiro.",
    fundacao: "1 de Setembro de 1910",
    estadio: "Neo Química Arena",
    torcida: "Fiel Torcida",
    rivalidades: "Palmeiras e São Paulo",
    alcunha: "Timão e Coringão",
    mascote: "Mosqueteiro",
    titulos: "30 Campeonatos paulistas\n 1 Copa Libertadores da América (2012)\n 2 Mundiais de Clubes FIF(2000 e 2012)\n 7 Campeonatos Brasileiros (1990, 1998, 1999, 2005, 2011, 2015 e 2017)\n 3 Copas do Brasil (1995, 2002 e 2009)\n 1 Supercopa do Brasil (1991)\n 1 Recopa Sul-Americana (2013)"
  },
  {
    imagem: require('./assets/semcopadobrasil.png'),
    nome: "São Paulo Futebol Clube",
    descricao: "  O São Paulo Futebol Clube é um dos clubes mais vitoriosos do Brasil.Fundado em 1930, o tricolor paulista já conquistou inúmeros títulos,incluindo a Copa Libertadores da América e o Mundial de Clubes.Reconhecido por revelar talentos e por seu estilo de jogo ofensivo,o São Paulo é um dos grandes protagonistas do futebol brasileiro.",
    fundacao: " 25 de janeiro de 1930",
    estadio: "Morumbi",
    torcida: "Tricolor Paulista",
    rivalidades: "Corinthians e Palmeiras",
    alcunha: " Tricolor, Soberano",
    mascote: "São Paulo",
    titulos: " 3 Copa Libertadores da América (1992, 1993 e 2005) \n3 Mundiais de Clubes FIFA (1992, 1993 e 2005) \n6 Campeonatos Brasileiros (1977,1986, 1991, 2006, 2007 e 2008) \n 1 Supercopa Libertadores (1993) \n 1 Copa Conmebol (1994) \n 1 Recopa Sul-Americana (1993)"
  },
  {
    imagem: require('./assets/palmeiras.png'),
    nome: "Sociedade Esportiva Palmeiras",
    descricao: "  O Palmeiras, fundado em 1914, é um dos times mais tradicionais dofutebol brasileiro. Conhecido como Verdão, o clube possui uma história de sucesso, com várias conquistas de títulos importantes, incluindo o Campeonato Brasileiro e a Copa Libertadores da América. O Palmeiras tem uma torcida apaixonada e uma rivalidade histórica com o Corinthians.",
    fundacao: "26 de agosto de 1914",
    estadio: "Allianz Parque",
    torcida: "Palmeirense",
    rivalidades: "Corinthians, São Paulo, Santos",
    alcunha: "Verdão",
    mascote: "Periquito",
    titulos: "2 Copa Libertadores da América (1999 e 2020) \n  10 Campeonatos Brasileiros (1960, 1967, 1967, 1969, 1972, 1973, 1993, 1994, 2016 e 2018) \n 4 Copas do Brasil (1998, 2012, 2015 e 2020) \n 1 Copa Rio Internacional (1951) \n 2 Campeonato serie B (2000,2012)"
  },
  {
    imagem: require('./assets/santos.png'),
    nome: "Santos Futebol Clube",
    descricao: " O Santos Futebol Clube é conhecido por revelar grandes talentos e por sua história marcada por jogadores lendários, como Pelé. Fundado em 1912, o clube já conquistou diversos títulos importantes,incluindo a Copa Libertadores da América e o Mundial de Clubes. O estilo de jogo ofensivo e a tradição ofensiva do Santos o tornam um dos grandes clubes do futebol brasileiro.",
    fundacao: "14 de abril de 1912",
    estadio: " Vila Belmiro",
    torcida: "Santista",
    rivalidades: " São Paulo, Corinthians e Palmeiras",
    alcunha: "Peixe, Alvinegro Praiano",
    mascote: "Baleia",
    titulos: " 3 Copa Libertadores da América (1962, 1963 e 2011) \n 2 Mundiais de Clubes FIFA (1962 e 1963) \n 8 Campeonatos Brasileiros (1961, 1962, 1963, 1964, 1965, 1968, 2002 e 2004) \n 1 Copa do Brasil (2010) \n 1 Supercopa do Brasil (1968) \n1 Recopa Sul-Americana (1968)"
  },
  {
    imagem: require('./assets/fla.png'),
    nome: "Clube de Regatas do Flamengo",
    descricao: " O Flamengo é o time de futebol mais popular do Brasil, com uma torcida apaixonada e uma história rica. Fundado em 1895, o clube  carioca conquistou inúmeros títulos, incluindo a Copa Libertadores da América e o Mundial de Clubes. Conhecido pelo seu estilo de jogo ofensivo e por revelar grandes jogadores, o Flamengo é uma potência no futebol brasileiro.",
    fundacao: "17 de novembro de 1895",
    estadio: "Maracanã",
    torcida: "Rubro-Negra",
    rivalidades: "Fluminense, Vasco e Botafogo",
    alcunha: "Mengão, Fla",
    mascote: " Urubu",
    titulos: "2 Copa Libertadores da América (1981 e 2019) \n 1 Mundial de Clubes FIFA (1981) \n 7 Campeonatos Brasileiros (1980, 1982, 1983, 1987, 1992, 2009 e 2019) \n 3 Copas do Brasil (1990, 2006 e 2013) \n 1 Supercopa do Brasil (2020) \n 2 Recopas Sul-Americanas (2020 e 2021)"
  },
  {
    imagem: require('./assets/gremio.png'),
    nome: "Grêmio Foot-Ball Porto Alegrense",
    descricao: "  O Grêmio Foot-Ball Porto Alegrense é um dos principais clubes do sul do Brasil. Fundado em 1903, o Grêmio possui uma torcida apaixonada e já conquistou importantes títulos, incluindo a Copa Libertadores da América e o Mundial de Clubes. Conhecido por seu estilo de jogo aguerrido, o Grêmio é um dos grandes representantes do futebol gaúcho.",
    fundacao: "15 de setembro de 1903",
    estadio: " Arena do Grêmio",
    torcida: "  Tricolor ",
    rivalidades: " Flamengo, Vasco e Botafogo",
    alcunha: "Time de Guerreiros, Flu ",
    mascote: " Guerreiro",
    titulos: " 3 Copa Libertadores da América (1983, 1995 e 2017) \n 1 Mundial de Clubes FIFA (1983) \n 2 Campeonatos Brasileiros (1981 e 1996) {'\n'}5 Copas do Brasil (1989, 1994, 1997, 2001 e 2016) \n 1 Recopa Sul-Americana (1996) \n 1 Copa Sul-Americana (2016)"
  },
  {
    imagem: require('./assets/fluminense.png'),
    nome: "Fluminense Football Club",
    descricao: "  O Fluminense Football Club é um dos clubes mais antigos do Brasil, fundado em 1902. Conhecido como Flu, o clube carioca possui uma história rica e já conquistou importantes títulos, incluindo o Campeonato Brasileiro e a Copa Libertadores da América. O Fluminense é conhecido por seu estilo de jogo técnico e ofensivo.",
    fundacao: "15 de setembro de 1903",
    estadio: "Arena do Grêmio",
    torcida: "Imortal Tricolor ",
    rivalidades: " Internacional",
    alcunha: "Tricolor Gaúcho ",
    mascote: "Mosqueteiro",
    titulos: " 2 Campeonatos Brasileiros (1970 e 1984) \n 1 Copa do Brasil(2007) \n 1 Supercopa do Brasil (2020) \n 1 Copa Rio Internacional (1952) \n 1 Copa de Campeões Mundiais (1952)"
  },
  {
    imagem: require('./assets/vasco.png'),
    nome: "Club de Regatas Vasco da Gama",
    descricao: " Club de Regatas Vasco da Gama é uma entidade sócio-poliesportiva brasileira com sede na cidade do Rio de Janeiro, fundada em 21 de agosto de 1898 por um grupo de remadores.",
    fundacao: "21 de agosto de 1898",
    estadio: "21 de agosto de 1898",
    torcida: "Vascaína",
    rivalidades: "Flamengo, Fluminense e Botafogo",
    alcunha: "Gigante da Colina, Cruzmaltino",
    mascote: "Almirante",
    titulos: " 1 Copa Libertadores (1998) \n 4 Campeonato Brasileiro  (1974, 1989, 1997, 2000) \n 1 Copa do Brasil  (2011) \n 24 Campeonato Carioca"
  },
  {
    imagem: require('./assets/galo.png'),
    nome: "Atlético Mineiro",
    descricao: "O Clube Atlético Mineiro, conhecido como Atlético-MG, é um dos principais clubes de Minas Gerais.Fundado em 1908, o Atlético- MG já conquistou importantes títulos, incluindo a Copa Libertadores da América.O clube tem uma torcida fanática e uma grande rivalidade com o Cruzeiro, conhecida como o Clássico Mineiro.",
  fundacao: " 25 de março de 1908",
    estadio: "Mineirão",
    torcida: "Atleticana",
    rivalidades: "Cruzeiro",
    alcunha: "Galo",
    mascote: "Galo Doido",
    titulos: "1 Copa Libertadores (2013) \n 2 Campeonato Brasileiro (1971,2021) \n 1 Copa do Brasil (2014) \n 45 Campeonato Mineiro"
},
{
  imagem: require('./assets/internacional.png'),
    nome: "Sport Club Internacional",
      descricao: "O Sport Club Internacional, fundado em 1909, é um dos grandes clubes do futebol brasileiro. Com uma história rica e uma torcida apaixonada, o Internacional já conquistou títulos importantes, incluindo a Copa Libertadores da América e o Mundial de Clubes. A rivalidade com o Grêmio é uma das mais intensas do país, conhecida como o Gre-Nal.",
        fundacao: "4 de abril de 1909",
          estadio: "Beira-Rio",
            torcida: "Colorada",
              rivalidades: "Grêmio",
                alcunha: "Colorado, Inter",
                  mascote: "Saci",
                    titulos: "2 Copa Libertadores da América (2006 e 2010) \n 1 Mundial de Clubes FIFA (2006) \n3 Campeonatos Brasileiros (1975, 1976 e 1979) \n 1 Copa do Brasil (1992) \n 1 Recopa Sul-Americana (2007)"
}

  ])



return (
  <ScrollView style={styles.container}>
    <View style={styles.container1}>
    <TouchableOpacity onPress={() => {
      setInfoTimeSelecionado(infoTime[0]);
      setModalVisible(true);
    }}>
      <Image
        style={{ width: 200, height: 200, marginBottom: 20 }}
        source={require('./assets/Corinthians.png')}
      />
    </TouchableOpacity>
    <TouchableOpacity onPress={() => {
      setInfoTimeSelecionado(infoTime[1]);
      setModalVisible(true);
    }}>
      <Image
        style={{ width: 200, height: 200, marginBottom: 20 }}
        source={require('./assets/semcopadobrasil.png')}
      />
    </TouchableOpacity>
    <TouchableOpacity onPress={() => {
      setInfoTimeSelecionado(infoTime[2]);
      setModalVisible(true);
    }}>
      <Image
        style={{ width: 200, height: 200, marginBottom: 20 }}
        source={require('./assets/palmeiras.png')}
      />

    </TouchableOpacity>
    <TouchableOpacity onPress={() => {
      setInfoTimeSelecionado(infoTime[3]);
      setModalVisible(true);
    }}>
      <Image
        style={{ width: 200, height: 200, marginBottom: 20 }}
        source={require('./assets/santos.png')}
      />
    </TouchableOpacity>



    <TouchableOpacity onPress={() => {
      setInfoTimeSelecionado(infoTime[4]);
      setModalVisible(true);
    }}>
      <Image
        style={{ width: 200, height: 200, marginBottom: 20 }}
        source={require('./assets/fla.png')}
      />
    </TouchableOpacity>

    <TouchableOpacity onPress={() => {
      setInfoTimeSelecionado(infoTime[5]);
      setModalVisible(true);
    }}>
      <Image
        style={{ width: 200, height: 200, marginBottom: 20 }}
        source={require('./assets/gremio.png')}
      />
    </TouchableOpacity>

    <TouchableOpacity onPress={() => {
      setInfoTimeSelecionado(infoTime[6]);
      setModalVisible(true);
    }}>
      <Image
        style={{ width: 200, height: 200, marginBottom: 20 }}
        source={require('./assets/fluminense.png')}
      />
    </TouchableOpacity>

    <TouchableOpacity onPress={() => {
      setInfoTimeSelecionado(infoTime[7]);
      setModalVisible(true);
    }}>
      <Image
        style={{ width: 200, height: 200, marginBottom: 20 }}
        source={require('./assets/vasco.png')}
      />
    </TouchableOpacity>

    <TouchableOpacity onPress={() => {
      setInfoTimeSelecionado(infoTime[8]);
      setModalVisible(true);
    }}>
      <Image
        style={{ width: 200, height: 200, marginBottom: 20 }}
        source={require('./assets/galo.png')}
      />
    </TouchableOpacity>
    <TouchableOpacity onPress={() => {
      setInfoTimeSelecionado(infoTime[9]);
      setModalVisible(true);
    }}>
      <Image
        style={{ width: 200, height: 200, marginBottom: 20 }}
        source={require('./assets/internacional.png')}
      />
    </TouchableOpacity>



    <Modal visible={modalVisible} animationType="slide" style={styles.modalContainer}>
      {infoTimeSelecionado ? (
        <View>
          <Image
            style={{ width: 200, height: 200, marginBottom: 20, marginLeft: 'auto', marginRight: 'auto' }}
            source={infoTimeSelecionado.imagem}
          />
          <Text style={styles.modalTitle}>{infoTimeSelecionado.nome}</Text>
          <Text style={styles.modalText1}>{infoTimeSelecionado.descricao}</Text>
          <Text style={styles.modalText}>Fundacao: {infoTimeSelecionado.fundacao}</Text>
          <Text style={styles.modalText}>Estadio: {infoTimeSelecionado.estadio}</Text>
          <Text style={styles.modalText}>Torcida: {infoTimeSelecionado.torcida}</Text>
          <Text style={styles.modalText}>Rivalidades: {infoTimeSelecionado.rivalidades}</Text>
          <Text style={styles.modalText}>Alcunha: {infoTimeSelecionado.alcunha}</Text>
          <Text style={styles.modalText}>Mascote: {infoTimeSelecionado.mascote}</Text>
          <Text style={styles.modalTitle}>titulos</Text>
          <Text style={styles.modalText}>{infoTimeSelecionado.titulos}</Text>
          <TouchableOpacity style={styles.btn} onPress={() => setModalVisible(false)}>
            <Text style={styles.textBtn}>Fechar</Text>
          </TouchableOpacity>
        </View>
      ) : null}
    </Modal>
    </View>
  </ScrollView>
);
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    textAlign:'center',
 
  },

  container1:{
alignItems:'center'
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    padding: 20,
  },
  modalTitle: {
    fontSize: 20,
    fontFamily: 'Verdana',
    fontWeight: 'bold',
    marginBottom: 10,
    marginRight: 'auto',
    marginLeft: 'auto'
  },
  negrito: {

  },
  modalText: {
    fontSize: 16,
marginLeft:5,
    textAlign: 'justify',
  },
  modalText1: {
    fontSize: 17,
    marginBottom: 10,
    textAlign: 'justify',
  },
  textBtn: {
    fontSize: 18,
    fontWeight: 'bold'
  },
  btn: {

    backgroundColor: '#ddd',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 10,
    marginTop: 20,
    marginLeft: 'auto',
    marginRight: 'auto'
  },
});