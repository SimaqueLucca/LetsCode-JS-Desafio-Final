const cities = [
  {
    "UF": "RJ",
    "id": 3300100,
    "name": "Angra dos Reis"
  },
  {
    "UF": "RJ",
    "id": 3300159,
    "name": "Aperibé"
  },
  {
    "UF": "RJ",
    "id": 3300209,
    "name": "Araruama"
  },
  {
    "UF": "RJ",
    "id": 3300225,
    "name": "Areal"
  },
  {
    "UF": "RJ",
    "id": 3300233,
    "name": "Armação dos Búzios"
  },
  {
    "UF": "RJ",
    "id": 3300258,
    "name": "Arraial do Cabo"
  },
  {
    "UF": "RJ",
    "id": 3300308,
    "name": "Barra do Piraí"
  },
  {
    "UF": "RJ",
    "id": 3300407,
    "name": "Barra Mansa"
  },
  {
    "UF": "RJ",
    "id": 3300456,
    "name": "Belford Roxo"
  },
  {
    "UF": "RJ",
    "id": 3300506,
    "name": "Bom Jardim"
  },
  {
    "UF": "RJ",
    "id": 3300605,
    "name": "Bom Jesus do Itabapoana"
  },
  {
    "UF": "RJ",
    "id": 3300704,
    "name": "Cabo Frio"
  },
  {
    "UF": "RJ",
    "id": 3300803,
    "name": "Cachoeiras de Macacu"
  },
  {
    "UF": "RJ",
    "id": 3300902,
    "name": "Cambuci"
  },
  {
    "UF": "RJ",
    "id": 3301009,
    "name": "Campos dos Goytacazes"
  },
  {
    "UF": "RJ",
    "id": 3301108,
    "name": "Cantagalo"
  },
  {
    "UF": "RJ",
    "id": 3300936,
    "name": "Carapebus"
  },
  {
    "UF": "RJ",
    "id": 3301157,
    "name": "Cardoso Moreira"
  },
  {
    "UF": "RJ",
    "id": 3301207,
    "name": "Carmo"
  },
  {
    "UF": "RJ",
    "id": 3301306,
    "name": "Casimiro de Abreu"
  },
  {
    "UF": "RJ",
    "id": 3300951,
    "name": "Comendador Levy Gasparian"
  },
  {
    "UF": "RJ",
    "id": 3301405,
    "name": "Conceição de Macabu"
  },
  {
    "UF": "RJ",
    "id": 3301504,
    "name": "Cordeiro"
  },
  {
    "UF": "RJ",
    "id": 3301603,
    "name": "Duas Barras"
  },
  {
    "UF": "RJ",
    "id": 3301702,
    "name": "Duque de Caxias"
  },
  {
    "UF": "RJ",
    "id": 3301801,
    "name": "Engenheiro Paulo de Frontin"
  },
  {
    "UF": "RJ",
    "id": 3301850,
    "name": "Guapimirim"
  },
  {
    "UF": "RJ",
    "id": 3301876,
    "name": "Iguaba Grande"
  },
  {
    "UF": "RJ",
    "id": 3301900,
    "name": "Itaboraí"
  },
  {
    "UF": "RJ",
    "id": 3302007,
    "name": "Itaguaí"
  },
  {
    "UF": "RJ",
    "id": 3302056,
    "name": "Italva"
  },
  {
    "UF": "RJ",
    "id": 3302106,
    "name": "Itaocara"
  },
  {
    "UF": "RJ",
    "id": 3302205,
    "name": "Itaperuna"
  },
  {
    "UF": "RJ",
    "id": 3302254,
    "name": "Itatiaia"
  },
  {
    "UF": "RJ",
    "id": 3302270,
    "name": "Japeri"
  },
  {
    "UF": "RJ",
    "id": 3302304,
    "name": "Laje do Muriaé"
  },
  {
    "UF": "RJ",
    "id": 3302403,
    "name": "Macaé"
  },
  {
    "UF": "RJ",
    "id": 3302452,
    "name": "Macuco"
  },
  {
    "UF": "RJ",
    "id": 3302502,
    "name": "Magé"
  },
  {
    "UF": "RJ",
    "id": 3302601,
    "name": "Mangaratiba"
  },
  {
    "UF": "RJ",
    "id": 3302700,
    "name": "Maricá"
  },
  {
    "UF": "RJ",
    "id": 3302809,
    "name": "Mendes"
  },
  {
    "UF": "RJ",
    "id": 3302858,
    "name": "Mesquita"
  },
  {
    "UF": "RJ",
    "id": 3302908,
    "name": "Miguel Pereira"
  },
  {
    "UF": "RJ",
    "id": 3303005,
    "name": "Miracema"
  },
  {
    "UF": "RJ",
    "id": 3303104,
    "name": "Natividade"
  },
  {
    "UF": "RJ",
    "id": 3303203,
    "name": "Nilópolis"
  },
  {
    "UF": "RJ",
    "id": 3303302,
    "name": "Niterói"
  },
  {
    "UF": "RJ",
    "id": 3303401,
    "name": "Nova Friburgo"
  },
  {
    "UF": "RJ",
    "id": 3303500,
    "name": "Nova Iguaçu"
  },
  {
    "UF": "RJ",
    "id": 3303609,
    "name": "Paracambi"
  },
  {
    "UF": "RJ",
    "id": 3303708,
    "name": "Paraíba do Sul"
  },
  {
    "UF": "RJ",
    "id": 3303807,
    "name": "Parati"
  },
  {
    "UF": "RJ",
    "id": 3303856,
    "name": "Paty do Alferes"
  },
  {
    "UF": "RJ",
    "id": 3303906,
    "name": "Petrópolis"
  },
  {
    "UF": "RJ",
    "id": 3303955,
    "name": "Pinheiral"
  },
  {
    "UF": "RJ",
    "id": 3304003,
    "name": "Piraí"
  },
  {
    "UF": "RJ",
    "id": 3304102,
    "name": "Porciúncula"
  },
  {
    "UF": "RJ",
    "id": 3304110,
    "name": "Porto Real"
  },
  {
    "UF": "RJ",
    "id": 3304128,
    "name": "Quatis"
  },
  {
    "UF": "RJ",
    "id": 3304144,
    "name": "Queimados"
  },
  {
    "UF": "RJ",
    "id": 3304151,
    "name": "Quissamã"
  },
  {
    "UF": "RJ",
    "id": 3304201,
    "name": "Resende"
  },
  {
    "UF": "RJ",
    "id": 3304300,
    "name": "Rio Bonito"
  },
  {
    "UF": "RJ",
    "id": 3304409,
    "name": "Rio Claro"
  },
  {
    "UF": "RJ",
    "id": 3304508,
    "name": "Rio das Flores"
  },
  {
    "UF": "RJ",
    "id": 3304524,
    "name": "Rio das Ostras"
  },
  {
    "UF": "RJ",
    "id": 3304557,
    "name": "Rio de Janeiro"
  },
  {
    "UF": "RJ",
    "id": 3304607,
    "name": "Santa Maria Madalena"
  },
  {
    "UF": "RJ",
    "id": 3304706,
    "name": "Santo Antônio de Pádua"
  },
  {
    "UF": "RJ",
    "id": 3304805,
    "name": "São Fidélis"
  },
  {
    "UF": "RJ",
    "id": 3304755,
    "name": "São Francisco de Itabapoana"
  },
  {
    "UF": "RJ",
    "id": 3304904,
    "name": "São Gonçalo"
  },
  {
    "UF": "RJ",
    "id": 3305000,
    "name": "São João da Barra"
  },
  {
    "UF": "RJ",
    "id": 3305109,
    "name": "São João de Meriti"
  },
  {
    "UF": "RJ",
    "id": 3305133,
    "name": "São José de Ubá"
  },
  {
    "UF": "RJ",
    "id": 3305158,
    "name": "São José do Vale do Rio Preto"
  },
  {
    "UF": "RJ",
    "id": 3305208,
    "name": "São Pedro da Aldeia"
  },
  {
    "UF": "RJ",
    "id": 3305307,
    "name": "São Sebastião do Alto"
  },
  {
    "UF": "RJ",
    "id": 3305406,
    "name": "Sapucaia"
  },
  {
    "UF": "RJ",
    "id": 3305505,
    "name": "Saquarema"
  },
  {
    "UF": "RJ",
    "id": 3305554,
    "name": "Seropédica"
  },
  {
    "UF": "RJ",
    "id": 3305604,
    "name": "Silva Jardim"
  },
  {
    "UF": "RJ",
    "id": 3305703,
    "name": "Sumidouro"
  },
  {
    "UF": "RJ",
    "id": 3305752,
    "name": "Tanguá"
  },
  {
    "UF": "RJ",
    "id": 3305802,
    "name": "Teresópolis"
  },
  {
    "UF": "RJ",
    "id": 3305901,
    "name": "Trajano de Moraes"
  },
  {
    "UF": "RJ",
    "id": 3306008,
    "name": "Três Rios"
  },
  {
    "UF": "RJ",
    "id": 3306107,
    "name": "Valença"
  },
  {
    "UF": "RJ",
    "id": 3306156,
    "name": "Varre Sai"
  },
  {
    "UF": "RJ",
    "id": 3306206,
    "name": "Vassouras"
  },
  {
    "UF": "RJ",
    "id": 3306305,
    "name": "Volta Redonda"
  },
  {
    "UF": "SP",
    "id": 3500105,
    "name": "Adamantina"
  },
  {
    "UF": "SP",
    "id": 3500204,
    "name": "Adolfo"
  },
  {
    "UF": "SP",
    "id": 3500303,
    "name": "Aguaí"
  },
  {
    "UF": "SP",
    "id": 3500402,
    "name": "Águas da Prata"
  },
  {
    "UF": "SP",
    "id": 3500501,
    "name": "Águas de Lindóia"
  },
  {
    "UF": "SP",
    "id": 3500550,
    "name": "Águas de Santa Bárbara"
  },
  {
    "UF": "SP",
    "id": 3500600,
    "name": "Águas de São Pedro"
  },
  {
    "UF": "SP",
    "id": 3500709,
    "name": "Agudos"
  },
  {
    "UF": "SP",
    "id": 3500758,
    "name": "Alambari"
  },
  {
    "UF": "SP",
    "id": 3500808,
    "name": "Alfredo Marcondes"
  },
  {
    "UF": "SP",
    "id": 3500907,
    "name": "Altair"
  },
  {
    "UF": "SP",
    "id": 3501004,
    "name": "Altinópolis"
  },
  {
    "UF": "SP",
    "id": 3501103,
    "name": "Alto Alegre"
  },
  {
    "UF": "SP",
    "id": 3501152,
    "name": "Alumínio"
  },
  {
    "UF": "SP",
    "id": 3501202,
    "name": "Álvares Florence"
  },
  {
    "UF": "SP",
    "id": 3501301,
    "name": "Álvares Machado"
  },
  {
    "UF": "SP",
    "id": 3501400,
    "name": "Álvaro de Carvalho"
  },
  {
    "UF": "SP",
    "id": 3501509,
    "name": "Alvinlândia"
  },
  {
    "UF": "SP",
    "id": 3501608,
    "name": "Americana"
  },
  {
    "UF": "SP",
    "id": 3501707,
    "name": "Américo Brasiliense"
  },
  {
    "UF": "SP",
    "id": 3501806,
    "name": "Américo de Campos"
  },
  {
    "UF": "SP",
    "id": 3501905,
    "name": "Amparo"
  },
  {
    "UF": "SP",
    "id": 3502002,
    "name": "Analândia"
  },
  {
    "UF": "SP",
    "id": 3502101,
    "name": "Andradina"
  },
  {
    "UF": "SP",
    "id": 3502200,
    "name": "Angatuba"
  },
  {
    "UF": "SP",
    "id": 3502309,
    "name": "Anhembi"
  },
  {
    "UF": "SP",
    "id": 3502408,
    "name": "Anhumas"
  },
  {
    "UF": "SP",
    "id": 3502507,
    "name": "Aparecida"
  },
  {
    "UF": "SP",
    "id": 3502606,
    "name": "Aparecida d'Oeste"
  },
  {
    "UF": "SP",
    "id": 3502705,
    "name": "Apiaí"
  },
  {
    "UF": "SP",
    "id": 3502754,
    "name": "Araçariguama"
  },
  {
    "UF": "SP",
    "id": 3502804,
    "name": "Araçatuba"
  },
  {
    "UF": "SP",
    "id": 3502903,
    "name": "Araçoiaba da Serra"
  },
  {
    "UF": "SP",
    "id": 3503000,
    "name": "Aramina"
  },
  {
    "UF": "SP",
    "id": 3503109,
    "name": "Arandu"
  },
  {
    "UF": "SP",
    "id": 3503158,
    "name": "Arapeí"
  },
  {
    "UF": "SP",
    "id": 3503208,
    "name": "Araraquara"
  },
  {
    "UF": "SP",
    "id": 3503307,
    "name": "Araras"
  },
  {
    "UF": "SP",
    "id": 3503356,
    "name": "Arco Íris"
  },
  {
    "UF": "SP",
    "id": 3503406,
    "name": "Arealva"
  },
  {
    "UF": "SP",
    "id": 3503505,
    "name": "Areias"
  },
  {
    "UF": "SP",
    "id": 3503604,
    "name": "Areiópolis"
  },
  {
    "UF": "SP",
    "id": 3503703,
    "name": "Ariranha"
  },
  {
    "UF": "SP",
    "id": 3503802,
    "name": "Artur Nogueira"
  },
  {
    "UF": "SP",
    "id": 3503901,
    "name": "Arujá"
  },
  {
    "UF": "SP",
    "id": 3503950,
    "name": "Aspásia"
  },
  {
    "UF": "SP",
    "id": 3504008,
    "name": "Assis"
  },
  {
    "UF": "SP",
    "id": 3504107,
    "name": "Atibaia"
  },
  {
    "UF": "SP",
    "id": 3504206,
    "name": "Auriflama"
  },
  {
    "UF": "SP",
    "id": 3504305,
    "name": "Avaí"
  },
  {
    "UF": "SP",
    "id": 3504404,
    "name": "Avanhandava"
  },
  {
    "UF": "SP",
    "id": 3504503,
    "name": "Avaré"
  },
  {
    "UF": "SP",
    "id": 3504602,
    "name": "Bady Bassitt"
  },
  {
    "UF": "SP",
    "id": 3504701,
    "name": "Balbinos"
  },
  {
    "UF": "SP",
    "id": 3504800,
    "name": "Bálsamo"
  },
  {
    "UF": "SP",
    "id": 3504909,
    "name": "Bananal"
  },
  {
    "UF": "SP",
    "id": 3505005,
    "name": "Barão de Antonina"
  },
  {
    "UF": "SP",
    "id": 3505104,
    "name": "Barbosa"
  },
  {
    "UF": "SP",
    "id": 3505203,
    "name": "Bariri"
  },
  {
    "UF": "SP",
    "id": 3505302,
    "name": "Barra Bonita"
  },
  {
    "UF": "SP",
    "id": 3505351,
    "name": "Barra do Chapéu"
  },
  {
    "UF": "SP",
    "id": 3505401,
    "name": "Barra do Turvo"
  },
  {
    "UF": "SP",
    "id": 3505500,
    "name": "Barretos"
  },
  {
    "UF": "SP",
    "id": 3505609,
    "name": "Barrinha"
  },
  {
    "UF": "SP",
    "id": 3505708,
    "name": "Barueri"
  },
  {
    "UF": "SP",
    "id": 3505807,
    "name": "Bastos"
  },
  {
    "UF": "SP",
    "id": 3505906,
    "name": "Batatais"
  },
  {
    "UF": "SP",
    "id": 3506003,
    "name": "Bauru"
  },
  {
    "UF": "SP",
    "id": 3506102,
    "name": "Bebedouro"
  },
  {
    "UF": "SP",
    "id": 3506201,
    "name": "Bento de Abreu"
  },
  {
    "UF": "SP",
    "id": 3506300,
    "name": "Bernardino de Campos"
  },
  {
    "UF": "SP",
    "id": 3506359,
    "name": "Bertioga"
  },
  {
    "UF": "SP",
    "id": 3506409,
    "name": "Bilac"
  },
  {
    "UF": "SP",
    "id": 3506508,
    "name": "Birigui"
  },
  {
    "UF": "SP",
    "id": 3506607,
    "name": "Biritiba Mirim"
  },
  {
    "UF": "SP",
    "id": 3506706,
    "name": "Boa Esperança do Sul"
  },
  {
    "UF": "SP",
    "id": 3506805,
    "name": "Bocaina"
  },
  {
    "UF": "SP",
    "id": 3506904,
    "name": "Bofete"
  },
  {
    "UF": "SP",
    "id": 3507001,
    "name": "Boituva"
  },
  {
    "UF": "SP",
    "id": 3507100,
    "name": "Bom Jesus dos Perdões"
  },
  {
    "UF": "SP",
    "id": 3507159,
    "name": "Bom Sucesso de Itararé"
  },
  {
    "UF": "SP",
    "id": 3507209,
    "name": "Borá"
  },
  {
    "UF": "SP",
    "id": 3507308,
    "name": "Boracéia"
  },
  {
    "UF": "SP",
    "id": 3507407,
    "name": "Borborema"
  },
  {
    "UF": "SP",
    "id": 3507456,
    "name": "Borebi"
  },
  {
    "UF": "SP",
    "id": 3507506,
    "name": "Botucatu"
  },
  {
    "UF": "SP",
    "id": 3507605,
    "name": "Bragança Paulista"
  },
  {
    "UF": "SP",
    "id": 3507704,
    "name": "Braúna"
  },
  {
    "UF": "SP",
    "id": 3507753,
    "name": "Brejo Alegre"
  },
  {
    "UF": "SP",
    "id": 3507803,
    "name": "Brodowski"
  },
  {
    "UF": "SP",
    "id": 3507902,
    "name": "Brotas"
  },
  {
    "UF": "SP",
    "id": 3508009,
    "name": "Buri"
  },
  {
    "UF": "SP",
    "id": 3508108,
    "name": "Buritama"
  },
  {
    "UF": "SP",
    "id": 3508207,
    "name": "Buritizal"
  },
  {
    "UF": "SP",
    "id": 3508306,
    "name": "Cabrália Paulista"
  },
  {
    "UF": "SP",
    "id": 3508405,
    "name": "Cabreúva"
  },
  {
    "UF": "SP",
    "id": 3508504,
    "name": "Caçapava"
  },
  {
    "UF": "SP",
    "id": 3508603,
    "name": "Cachoeira Paulista"
  },
  {
    "UF": "SP",
    "id": 3508702,
    "name": "Caconde"
  },
  {
    "UF": "SP",
    "id": 3508801,
    "name": "Cafelândia"
  },
  {
    "UF": "SP",
    "id": 3508900,
    "name": "Caiabu"
  },
  {
    "UF": "SP",
    "id": 3509007,
    "name": "Caieiras"
  },
  {
    "UF": "SP",
    "id": 3509106,
    "name": "Caiuá"
  },
  {
    "UF": "SP",
    "id": 3509205,
    "name": "Cajamar"
  },
  {
    "UF": "SP",
    "id": 3509254,
    "name": "Cajati"
  },
  {
    "UF": "SP",
    "id": 3509304,
    "name": "Cajobi"
  },
  {
    "UF": "SP",
    "id": 3509403,
    "name": "Cajuru"
  },
  {
    "UF": "SP",
    "id": 3509452,
    "name": "Campina do Monte Alegre"
  },
  {
    "UF": "SP",
    "id": 3509502,
    "name": "Campinas"
  },
  {
    "UF": "SP",
    "id": 3509601,
    "name": "Campo Limpo Paulista"
  },
  {
    "UF": "SP",
    "id": 3509700,
    "name": "Campos do Jordão"
  },
  {
    "UF": "SP",
    "id": 3509809,
    "name": "Campos Novos Paulista"
  },
  {
    "UF": "SP",
    "id": 3509908,
    "name": "Cananéia"
  },
  {
    "UF": "SP",
    "id": 3509957,
    "name": "Canas"
  },
  {
    "UF": "SP",
    "id": 3510005,
    "name": "Cândido Mota"
  },
  {
    "UF": "SP",
    "id": 3510104,
    "name": "Cândido Rodrigues"
  },
  {
    "UF": "SP",
    "id": 3510153,
    "name": "Canitar"
  },
  {
    "UF": "SP",
    "id": 3510203,
    "name": "Capão Bonito"
  },
  {
    "UF": "SP",
    "id": 3510302,
    "name": "Capela do Alto"
  },
  {
    "UF": "SP",
    "id": 3510401,
    "name": "Capivari"
  },
  {
    "UF": "SP",
    "id": 3510500,
    "name": "Caraguatatuba"
  },
  {
    "UF": "SP",
    "id": 3510609,
    "name": "Carapicuíba"
  },
  {
    "UF": "SP",
    "id": 3510708,
    "name": "Cardoso"
  },
  {
    "UF": "SP",
    "id": 3510807,
    "name": "Casa Branca"
  },
  {
    "UF": "SP",
    "id": 3510906,
    "name": "Cássia dos Coqueiros"
  },
  {
    "UF": "SP",
    "id": 3511003,
    "name": "Castilho"
  },
  {
    "UF": "SP",
    "id": 3511102,
    "name": "Catanduva"
  },
  {
    "UF": "SP",
    "id": 3511201,
    "name": "Catiguá"
  },
  {
    "UF": "SP",
    "id": 3511300,
    "name": "Cedral"
  },
  {
    "UF": "SP",
    "id": 3511409,
    "name": "Cerqueira César"
  },
  {
    "UF": "SP",
    "id": 3511508,
    "name": "Cerquilho"
  },
  {
    "UF": "SP",
    "id": 3511607,
    "name": "Cesário Lange"
  },
  {
    "UF": "SP",
    "id": 3511706,
    "name": "Charqueada"
  },
  {
    "UF": "SP",
    "id": 3557204,
    "name": "Chavantes"
  },
  {
    "UF": "SP",
    "id": 3511904,
    "name": "Clementina"
  },
  {
    "UF": "SP",
    "id": 3512001,
    "name": "Colina"
  },
  {
    "UF": "SP",
    "id": 3512100,
    "name": "Colômbia"
  },
  {
    "UF": "SP",
    "id": 3512209,
    "name": "Conchal"
  },
  {
    "UF": "SP",
    "id": 3512308,
    "name": "Conchas"
  },
  {
    "UF": "SP",
    "id": 3512407,
    "name": "Cordeirópolis"
  },
  {
    "UF": "SP",
    "id": 3512506,
    "name": "Coroados"
  },
  {
    "UF": "SP",
    "id": 3512605,
    "name": "Coronel Macedo"
  },
  {
    "UF": "SP",
    "id": 3512704,
    "name": "Corumbataí"
  },
  {
    "UF": "SP",
    "id": 3512803,
    "name": "Cosmópolis"
  },
  {
    "UF": "SP",
    "id": 3512902,
    "name": "Cosmorama"
  },
  {
    "UF": "SP",
    "id": 3513009,
    "name": "Cotia"
  },
  {
    "UF": "SP",
    "id": 3513108,
    "name": "Cravinhos"
  },
  {
    "UF": "SP",
    "id": 3513207,
    "name": "Cristais Paulista"
  },
  {
    "UF": "SP",
    "id": 3513306,
    "name": "Cruzália"
  },
  {
    "UF": "SP",
    "id": 3513405,
    "name": "Cruzeiro"
  },
  {
    "UF": "SP",
    "id": 3513504,
    "name": "Cubatão"
  },
  {
    "UF": "SP",
    "id": 3513603,
    "name": "Cunha"
  },
  {
    "UF": "SP",
    "id": 3513702,
    "name": "Descalvado"
  },
  {
    "UF": "SP",
    "id": 3513801,
    "name": "Diadema"
  },
  {
    "UF": "SP",
    "id": 3513850,
    "name": "Dirce Reis"
  },
  {
    "UF": "SP",
    "id": 3513900,
    "name": "Divinolândia"
  },
  {
    "UF": "SP",
    "id": 3514007,
    "name": "Dobrada"
  },
  {
    "UF": "SP",
    "id": 3514106,
    "name": "Dois Córregos"
  },
  {
    "UF": "SP",
    "id": 3514205,
    "name": "Dolcinópolis"
  },
  {
    "UF": "SP",
    "id": 3514304,
    "name": "Dourado"
  },
  {
    "UF": "SP",
    "id": 3514403,
    "name": "Dracena"
  },
  {
    "UF": "SP",
    "id": 3514502,
    "name": "Duartina"
  },
  {
    "UF": "SP",
    "id": 3514601,
    "name": "Dumont"
  },
  {
    "UF": "SP",
    "id": 3514700,
    "name": "Echaporã"
  },
  {
    "UF": "SP",
    "id": 3514809,
    "name": "Eldorado"
  },
  {
    "UF": "SP",
    "id": 3514908,
    "name": "Elias Fausto"
  },
  {
    "UF": "SP",
    "id": 3514924,
    "name": "Elisiário"
  },
  {
    "UF": "SP",
    "id": 3514957,
    "name": "Embaúba"
  },
  {
    "UF": "SP",
    "id": 3515004,
    "name": "Embu das Artes"
  },
  {
    "UF": "SP",
    "id": 3515103,
    "name": "Embu Guaçu"
  },
  {
    "UF": "SP",
    "id": 3515129,
    "name": "Emilianópolis"
  },
  {
    "UF": "SP",
    "id": 3515152,
    "name": "Engenheiro Coelho"
  },
  {
    "UF": "SP",
    "id": 3515186,
    "name": "Espírito Santo do Pinhal"
  },
  {
    "UF": "SP",
    "id": 3515194,
    "name": "Espírito Santo do Turvo"
  },
  {
    "UF": "SP",
    "id": 3557303,
    "name": "Estiva Gerbi"
  },
  {
    "UF": "SP",
    "id": 3515301,
    "name": "Estrela do Norte"
  },
  {
    "UF": "SP",
    "id": 3515202,
    "name": "Estrela d'Oeste"
  },
  {
    "UF": "SP",
    "id": 3515350,
    "name": "Euclides da Cunha Paulista"
  },
  {
    "UF": "SP",
    "id": 3515400,
    "name": "Fartura"
  },
  {
    "UF": "SP",
    "id": 3515608,
    "name": "Fernando Prestes"
  },
  {
    "UF": "SP",
    "id": 3515509,
    "name": "Fernandópolis"
  },
  {
    "UF": "SP",
    "id": 3515657,
    "name": "Fernão"
  },
  {
    "UF": "SP",
    "id": 3515707,
    "name": "Ferraz de Vasconcelos"
  },
  {
    "UF": "SP",
    "id": 3515806,
    "name": "Flora Rica"
  },
  {
    "UF": "SP",
    "id": 3515905,
    "name": "Floreal"
  },
  {
    "UF": "SP",
    "id": 3516002,
    "name": "Flórida Paulista"
  },
  {
    "UF": "SP",
    "id": 3516101,
    "name": "Florínea"
  },
  {
    "UF": "SP",
    "id": 3516200,
    "name": "Franca"
  },
  {
    "UF": "SP",
    "id": 3516309,
    "name": "Francisco Morato"
  },
  {
    "UF": "SP",
    "id": 3516408,
    "name": "Franco da Rocha"
  },
  {
    "UF": "SP",
    "id": 3516507,
    "name": "Gabriel Monteiro"
  },
  {
    "UF": "SP",
    "id": 3516606,
    "name": "Gália"
  },
  {
    "UF": "SP",
    "id": 3516705,
    "name": "Garça"
  },
  {
    "UF": "SP",
    "id": 3516804,
    "name": "Gastão Vidigal"
  },
  {
    "UF": "SP",
    "id": 3516853,
    "name": "Gavião Peixoto"
  },
  {
    "UF": "SP",
    "id": 3516903,
    "name": "General Salgado"
  },
  {
    "UF": "SP",
    "id": 3517000,
    "name": "Getulina"
  },
  {
    "UF": "SP",
    "id": 3517109,
    "name": "Glicério"
  },
  {
    "UF": "SP",
    "id": 3517208,
    "name": "Guaiçara"
  },
  {
    "UF": "SP",
    "id": 3517307,
    "name": "Guaimbê"
  },
  {
    "UF": "SP",
    "id": 3517406,
    "name": "Guaíra"
  },
  {
    "UF": "SP",
    "id": 3517505,
    "name": "Guapiaçu"
  },
  {
    "UF": "SP",
    "id": 3517604,
    "name": "Guapiara"
  },
  {
    "UF": "SP",
    "id": 3517703,
    "name": "Guará"
  },
  {
    "UF": "SP",
    "id": 3517802,
    "name": "Guaraçaí"
  },
  {
    "UF": "SP",
    "id": 3517901,
    "name": "Guaraci"
  },
  {
    "UF": "SP",
    "id": 3518008,
    "name": "Guarani d'Oeste"
  },
  {
    "UF": "SP",
    "id": 3518107,
    "name": "Guarantã"
  },
  {
    "UF": "SP",
    "id": 3518206,
    "name": "Guararapes"
  },
  {
    "UF": "SP",
    "id": 3518305,
    "name": "Guararema"
  },
  {
    "UF": "SP",
    "id": 3518404,
    "name": "Guaratinguetá"
  },
  {
    "UF": "SP",
    "id": 3518503,
    "name": "Guareí"
  },
  {
    "UF": "SP",
    "id": 3518602,
    "name": "Guariba"
  },
  {
    "UF": "SP",
    "id": 3518701,
    "name": "Guarujá"
  },
  {
    "UF": "SP",
    "id": 3518800,
    "name": "Guarulhos"
  },
  {
    "UF": "SP",
    "id": 3518859,
    "name": "Guatapará"
  },
  {
    "UF": "SP",
    "id": 3518909,
    "name": "Guzolândia"
  },
  {
    "UF": "SP",
    "id": 3519006,
    "name": "Herculândia"
  },
  {
    "UF": "SP",
    "id": 3519055,
    "name": "Holambra"
  },
  {
    "UF": "SP",
    "id": 3519071,
    "name": "Hortolândia"
  },
  {
    "UF": "SP",
    "id": 3519105,
    "name": "Iacanga"
  },
  {
    "UF": "SP",
    "id": 3519204,
    "name": "Iacri"
  },
  {
    "UF": "SP",
    "id": 3519253,
    "name": "Iaras"
  },
  {
    "UF": "SP",
    "id": 3519303,
    "name": "Ibaté"
  },
  {
    "UF": "SP",
    "id": 3519402,
    "name": "Ibirá"
  },
  {
    "UF": "SP",
    "id": 3519501,
    "name": "Ibirarema"
  },
  {
    "UF": "SP",
    "id": 3519600,
    "name": "Ibitinga"
  },
  {
    "UF": "SP",
    "id": 3519709,
    "name": "Ibiúna"
  },
  {
    "UF": "SP",
    "id": 3519808,
    "name": "Icém"
  },
  {
    "UF": "SP",
    "id": 3519907,
    "name": "Iepê"
  },
  {
    "UF": "SP",
    "id": 3520004,
    "name": "Igaraçu do Tietê"
  },
  {
    "UF": "SP",
    "id": 3520103,
    "name": "Igarapava"
  },
  {
    "UF": "SP",
    "id": 3520202,
    "name": "Igaratá"
  },
  {
    "UF": "SP",
    "id": 3520301,
    "name": "Iguape"
  },
  {
    "UF": "SP",
    "id": 3520426,
    "name": "Ilha Comprida"
  },
  {
    "UF": "SP",
    "id": 3520442,
    "name": "Ilha Solteira"
  },
  {
    "UF": "SP",
    "id": 3520400,
    "name": "Ilhabela"
  },
  {
    "UF": "SP",
    "id": 3520509,
    "name": "Indaiatuba"
  },
  {
    "UF": "SP",
    "id": 3520608,
    "name": "Indiana"
  },
  {
    "UF": "SP",
    "id": 3520707,
    "name": "Indiaporã"
  },
  {
    "UF": "SP",
    "id": 3520806,
    "name": "Inúbia Paulista"
  },
  {
    "UF": "SP",
    "id": 3520905,
    "name": "Ipaussu"
  },
  {
    "UF": "SP",
    "id": 3521002,
    "name": "Iperó"
  },
  {
    "UF": "SP",
    "id": 3521101,
    "name": "Ipeúna"
  },
  {
    "UF": "SP",
    "id": 3521150,
    "name": "Ipiguá"
  },
  {
    "UF": "SP",
    "id": 3521200,
    "name": "Iporanga"
  },
  {
    "UF": "SP",
    "id": 3521309,
    "name": "Ipuã"
  },
  {
    "UF": "SP",
    "id": 3521408,
    "name": "Iracemápolis"
  },
  {
    "UF": "SP",
    "id": 3521507,
    "name": "Irapuã"
  },
  {
    "UF": "SP",
    "id": 3521606,
    "name": "Irapuru"
  },
  {
    "UF": "SP",
    "id": 3521705,
    "name": "Itaberá"
  },
  {
    "UF": "SP",
    "id": 3521804,
    "name": "Itaí"
  },
  {
    "UF": "SP",
    "id": 3521903,
    "name": "Itajobi"
  },
  {
    "UF": "SP",
    "id": 3522000,
    "name": "Itaju"
  },
  {
    "UF": "SP",
    "id": 3522109,
    "name": "Itanhaém"
  },
  {
    "UF": "SP",
    "id": 3522158,
    "name": "Itaoca"
  },
  {
    "UF": "SP",
    "id": 3522208,
    "name": "Itapecerica da Serra"
  },
  {
    "UF": "SP",
    "id": 3522307,
    "name": "Itapetininga"
  },
  {
    "UF": "SP",
    "id": 3522406,
    "name": "Itapeva"
  },
  {
    "UF": "SP",
    "id": 3522505,
    "name": "Itapevi"
  },
  {
    "UF": "SP",
    "id": 3522604,
    "name": "Itapira"
  },
  {
    "UF": "SP",
    "id": 3522653,
    "name": "Itapirapuã Paulista"
  },
  {
    "UF": "SP",
    "id": 3522703,
    "name": "Itápolis"
  },
  {
    "UF": "SP",
    "id": 3522802,
    "name": "Itaporanga"
  },
  {
    "UF": "SP",
    "id": 3522901,
    "name": "Itapuí"
  },
  {
    "UF": "SP",
    "id": 3523008,
    "name": "Itapura"
  },
  {
    "UF": "SP",
    "id": 3523107,
    "name": "Itaquaquecetuba"
  },
  {
    "UF": "SP",
    "id": 3523206,
    "name": "Itararé"
  },
  {
    "UF": "SP",
    "id": 3523305,
    "name": "Itariri"
  },
  {
    "UF": "SP",
    "id": 3523404,
    "name": "Itatiba"
  },
  {
    "UF": "SP",
    "id": 3523503,
    "name": "Itatinga"
  },
  {
    "UF": "SP",
    "id": 3523602,
    "name": "Itirapina"
  },
  {
    "UF": "SP",
    "id": 3523701,
    "name": "Itirapuã"
  },
  {
    "UF": "SP",
    "id": 3523800,
    "name": "Itobi"
  },
  {
    "UF": "SP",
    "id": 3523909,
    "name": "Itu"
  },
  {
    "UF": "SP",
    "id": 3524006,
    "name": "Itupeva"
  },
  {
    "UF": "SP",
    "id": 3524105,
    "name": "Ituverava"
  },
  {
    "UF": "SP",
    "id": 3524204,
    "name": "Jaborandi"
  },
  {
    "UF": "SP",
    "id": 3524303,
    "name": "Jaboticabal"
  },
  {
    "UF": "SP",
    "id": 3524402,
    "name": "Jacareí"
  },
  {
    "UF": "SP",
    "id": 3524501,
    "name": "Jaci"
  },
  {
    "UF": "SP",
    "id": 3524600,
    "name": "Jacupiranga"
  },
  {
    "UF": "SP",
    "id": 3524709,
    "name": "Jaguariúna"
  },
  {
    "UF": "SP",
    "id": 3524808,
    "name": "Jales"
  },
  {
    "UF": "SP",
    "id": 3524907,
    "name": "Jambeiro"
  },
  {
    "UF": "SP",
    "id": 3525003,
    "name": "Jandira"
  },
  {
    "UF": "SP",
    "id": 3525102,
    "name": "Jardinópolis"
  },
  {
    "UF": "SP",
    "id": 3525201,
    "name": "Jarinu"
  },
  {
    "UF": "SP",
    "id": 3525300,
    "name": "Jaú"
  },
  {
    "UF": "SP",
    "id": 3525409,
    "name": "Jeriquara"
  },
  {
    "UF": "SP",
    "id": 3525508,
    "name": "Joanópolis"
  },
  {
    "UF": "SP",
    "id": 3525607,
    "name": "João Ramalho"
  },
  {
    "UF": "SP",
    "id": 3525706,
    "name": "José Bonifácio"
  },
  {
    "UF": "SP",
    "id": 3525805,
    "name": "Júlio Mesquita"
  },
  {
    "UF": "SP",
    "id": 3525854,
    "name": "Jumirim"
  },
  {
    "UF": "SP",
    "id": 3525904,
    "name": "Jundiaí"
  },
  {
    "UF": "SP",
    "id": 3526001,
    "name": "Junqueirópolis"
  },
  {
    "UF": "SP",
    "id": 3526100,
    "name": "Juquiá"
  },
  {
    "UF": "SP",
    "id": 3526209,
    "name": "Juquitiba"
  },
  {
    "UF": "SP",
    "id": 3526308,
    "name": "Lagoinha"
  },
  {
    "UF": "SP",
    "id": 3526407,
    "name": "Laranjal Paulista"
  },
  {
    "UF": "SP",
    "id": 3526506,
    "name": "Lavínia"
  },
  {
    "UF": "SP",
    "id": 3526605,
    "name": "Lavrinhas"
  },
  {
    "UF": "SP",
    "id": 3526704,
    "name": "Leme"
  },
  {
    "UF": "SP",
    "id": 3526803,
    "name": "Lençóis Paulista"
  },
  {
    "UF": "SP",
    "id": 3526902,
    "name": "Limeira"
  },
  {
    "UF": "SP",
    "id": 3527009,
    "name": "Lindóia"
  },
  {
    "UF": "SP",
    "id": 3527108,
    "name": "Lins"
  },
  {
    "UF": "SP",
    "id": 3527207,
    "name": "Lorena"
  },
  {
    "UF": "SP",
    "id": 3527256,
    "name": "Lourdes"
  },
  {
    "UF": "SP",
    "id": 3527306,
    "name": "Louveira"
  },
  {
    "UF": "SP",
    "id": 3527405,
    "name": "Lucélia"
  },
  {
    "UF": "SP",
    "id": 3527504,
    "name": "Lucianópolis"
  },
  {
    "UF": "SP",
    "id": 3527603,
    "name": "Luís Antônio"
  },
  {
    "UF": "SP",
    "id": 3527702,
    "name": "Luiziânia"
  },
  {
    "UF": "SP",
    "id": 3527801,
    "name": "Lupércio"
  },
  {
    "UF": "SP",
    "id": 3527900,
    "name": "Lutécia"
  },
  {
    "UF": "SP",
    "id": 3528007,
    "name": "Macatuba"
  },
  {
    "UF": "SP",
    "id": 3528106,
    "name": "Macaubal"
  },
  {
    "UF": "SP",
    "id": 3528205,
    "name": "Macedônia"
  },
  {
    "UF": "SP",
    "id": 3528304,
    "name": "Magda"
  },
  {
    "UF": "SP",
    "id": 3528403,
    "name": "Mairinque"
  },
  {
    "UF": "SP",
    "id": 3528502,
    "name": "Mairiporã"
  },
  {
    "UF": "SP",
    "id": 3528601,
    "name": "Manduri"
  },
  {
    "UF": "SP",
    "id": 3528700,
    "name": "Marabá Paulista"
  },
  {
    "UF": "SP",
    "id": 3528809,
    "name": "Maracaí"
  },
  {
    "UF": "SP",
    "id": 3528858,
    "name": "Marapoama"
  },
  {
    "UF": "SP",
    "id": 3528908,
    "name": "Mariápolis"
  },
  {
    "UF": "SP",
    "id": 3529005,
    "name": "Marília"
  },
  {
    "UF": "SP",
    "id": 3529104,
    "name": "Marinópolis"
  },
  {
    "UF": "SP",
    "id": 3529203,
    "name": "Martinópolis"
  },
  {
    "UF": "SP",
    "id": 3529302,
    "name": "Matão"
  },
  {
    "UF": "SP",
    "id": 3529401,
    "name": "Mauá"
  },
  {
    "UF": "SP",
    "id": 3529500,
    "name": "Mendonça"
  },
  {
    "UF": "SP",
    "id": 3529609,
    "name": "Meridiano"
  },
  {
    "UF": "SP",
    "id": 3529658,
    "name": "Mesópolis"
  },
  {
    "UF": "SP",
    "id": 3529708,
    "name": "Miguelópolis"
  },
  {
    "UF": "SP",
    "id": 3529807,
    "name": "Mineiros do Tietê"
  },
  {
    "UF": "SP",
    "id": 3530003,
    "name": "Mira Estrela"
  },
  {
    "UF": "SP",
    "id": 3529906,
    "name": "Miracatu"
  },
  {
    "UF": "SP",
    "id": 3530102,
    "name": "Mirandópolis"
  },
  {
    "UF": "SP",
    "id": 3530201,
    "name": "Mirante do Paranapanema"
  },
  {
    "UF": "SP",
    "id": 3530300,
    "name": "Mirassol"
  },
  {
    "UF": "SP",
    "id": 3530409,
    "name": "Mirassolândia"
  },
  {
    "UF": "SP",
    "id": 3530508,
    "name": "Mococa"
  },
  {
    "UF": "SP",
    "id": 3530607,
    "name": "Mogi das Cruzes"
  },
  {
    "UF": "SP",
    "id": 3530706,
    "name": "Mogi Guaçu"
  },
  {
    "UF": "SP",
    "id": 3530805,
    "name": "Mogi Mirim"
  },
  {
    "UF": "SP",
    "id": 3530904,
    "name": "Mombuca"
  },
  {
    "UF": "SP",
    "id": 3531001,
    "name": "Monções"
  },
  {
    "UF": "SP",
    "id": 3531100,
    "name": "Mongaguá"
  },
  {
    "UF": "SP",
    "id": 3531209,
    "name": "Monte Alegre do Sul"
  },
  {
    "UF": "SP",
    "id": 3531308,
    "name": "Monte Alto"
  },
  {
    "UF": "SP",
    "id": 3531407,
    "name": "Monte Aprazível"
  },
  {
    "UF": "SP",
    "id": 3531506,
    "name": "Monte Azul Paulista"
  },
  {
    "UF": "SP",
    "id": 3531605,
    "name": "Monte Castelo"
  },
  {
    "UF": "SP",
    "id": 3531803,
    "name": "Monte Mor"
  },
  {
    "UF": "SP",
    "id": 3531704,
    "name": "Monteiro Lobato"
  },
  {
    "UF": "SP",
    "id": 3531902,
    "name": "Morro Agudo"
  },
  {
    "UF": "SP",
    "id": 3532009,
    "name": "Morungaba"
  },
  {
    "UF": "SP",
    "id": 3532058,
    "name": "Motuca"
  },
  {
    "UF": "SP",
    "id": 3532108,
    "name": "Murutinga do Sul"
  },
  {
    "UF": "SP",
    "id": 3532157,
    "name": "Nantes"
  },
  {
    "UF": "SP",
    "id": 3532207,
    "name": "Narandiba"
  },
  {
    "UF": "SP",
    "id": 3532306,
    "name": "Natividade da Serra"
  },
  {
    "UF": "SP",
    "id": 3532405,
    "name": "Nazaré Paulista"
  },
  {
    "UF": "SP",
    "id": 3532504,
    "name": "Neves Paulista"
  },
  {
    "UF": "SP",
    "id": 3532603,
    "name": "Nhandeara"
  },
  {
    "UF": "SP",
    "id": 3532702,
    "name": "Nipoã"
  },
  {
    "UF": "SP",
    "id": 3532801,
    "name": "Nova Aliança"
  },
  {
    "UF": "SP",
    "id": 3532827,
    "name": "Nova Campina"
  },
  {
    "UF": "SP",
    "id": 3532843,
    "name": "Nova Canaã Paulista"
  },
  {
    "UF": "SP",
    "id": 3532868,
    "name": "Nova Castilho"
  },
  {
    "UF": "SP",
    "id": 3532900,
    "name": "Nova Europa"
  },
  {
    "UF": "SP",
    "id": 3533007,
    "name": "Nova Granada"
  },
  {
    "UF": "SP",
    "id": 3533106,
    "name": "Nova Guataporanga"
  },
  {
    "UF": "SP",
    "id": 3533205,
    "name": "Nova Independência"
  },
  {
    "UF": "SP",
    "id": 3533304,
    "name": "Nova Luzitânia"
  },
  {
    "UF": "SP",
    "id": 3533403,
    "name": "Nova Odessa"
  },
  {
    "UF": "SP",
    "id": 3533254,
    "name": "Novais"
  },
  {
    "UF": "SP",
    "id": 3533502,
    "name": "Novo Horizonte"
  },
  {
    "UF": "SP",
    "id": 3533601,
    "name": "Nuporanga"
  },
  {
    "UF": "SP",
    "id": 3533700,
    "name": "Ocauçu"
  },
  {
    "UF": "SP",
    "id": 3533809,
    "name": "Óleo"
  },
  {
    "UF": "SP",
    "id": 3533908,
    "name": "Olímpia"
  },
  {
    "UF": "SP",
    "id": 3534005,
    "name": "Onda Verde"
  },
  {
    "UF": "SP",
    "id": 3534104,
    "name": "Oriente"
  },
  {
    "UF": "SP",
    "id": 3534203,
    "name": "Orindiúva"
  },
  {
    "UF": "SP",
    "id": 3534302,
    "name": "Orlândia"
  },
  {
    "UF": "SP",
    "id": 3534401,
    "name": "Osasco"
  },
  {
    "UF": "SP",
    "id": 3534500,
    "name": "Oscar Bressane"
  },
  {
    "UF": "SP",
    "id": 3534609,
    "name": "Osvaldo Cruz"
  },
  {
    "UF": "SP",
    "id": 3534708,
    "name": "Ourinhos"
  },
  {
    "UF": "SP",
    "id": 3534807,
    "name": "Ouro Verde"
  },
  {
    "UF": "SP",
    "id": 3534757,
    "name": "Ouroeste"
  },
  {
    "UF": "SP",
    "id": 3534906,
    "name": "Pacaembu"
  },
  {
    "UF": "SP",
    "id": 3535002,
    "name": "Palestina"
  },
  {
    "UF": "SP",
    "id": 3535101,
    "name": "Palmares Paulista"
  },
  {
    "UF": "SP",
    "id": 3535200,
    "name": "Palmeira d'Oeste"
  },
  {
    "UF": "SP",
    "id": 3535309,
    "name": "Palmital"
  },
  {
    "UF": "SP",
    "id": 3535408,
    "name": "Panorama"
  },
  {
    "UF": "SP",
    "id": 3535507,
    "name": "Paraguaçu Paulista"
  },
  {
    "UF": "SP",
    "id": 3535606,
    "name": "Paraibuna"
  },
  {
    "UF": "SP",
    "id": 3535705,
    "name": "Paraíso"
  },
  {
    "UF": "SP",
    "id": 3535804,
    "name": "Paranapanema"
  },
  {
    "UF": "SP",
    "id": 3535903,
    "name": "Paranapuã"
  },
  {
    "UF": "SP",
    "id": 3536000,
    "name": "Parapuã"
  },
  {
    "UF": "SP",
    "id": 3536109,
    "name": "Pardinho"
  },
  {
    "UF": "SP",
    "id": 3536208,
    "name": "Pariquera Açu"
  },
  {
    "UF": "SP",
    "id": 3536257,
    "name": "Parisi"
  },
  {
    "UF": "SP",
    "id": 3536307,
    "name": "Patrocínio Paulista"
  },
  {
    "UF": "SP",
    "id": 3536406,
    "name": "Paulicéia"
  },
  {
    "UF": "SP",
    "id": 3536505,
    "name": "Paulínia"
  },
  {
    "UF": "SP",
    "id": 3536570,
    "name": "Paulistânia"
  },
  {
    "UF": "SP",
    "id": 3536604,
    "name": "Paulo de Faria"
  },
  {
    "UF": "SP",
    "id": 3536703,
    "name": "Pederneiras"
  },
  {
    "UF": "SP",
    "id": 3536802,
    "name": "Pedra Bela"
  },
  {
    "UF": "SP",
    "id": 3536901,
    "name": "Pedranópolis"
  },
  {
    "UF": "SP",
    "id": 3537008,
    "name": "Pedregulho"
  },
  {
    "UF": "SP",
    "id": 3537107,
    "name": "Pedreira"
  },
  {
    "UF": "SP",
    "id": 3537156,
    "name": "Pedrinhas Paulista"
  },
  {
    "UF": "SP",
    "id": 3537206,
    "name": "Pedro de Toledo"
  },
  {
    "UF": "SP",
    "id": 3537305,
    "name": "Penápolis"
  },
  {
    "UF": "SP",
    "id": 3537404,
    "name": "Pereira Barreto"
  },
  {
    "UF": "SP",
    "id": 3537503,
    "name": "Pereiras"
  },
  {
    "UF": "SP",
    "id": 3537602,
    "name": "Peruíbe"
  },
  {
    "UF": "SP",
    "id": 3537701,
    "name": "Piacatu"
  },
  {
    "UF": "SP",
    "id": 3537800,
    "name": "Piedade"
  },
  {
    "UF": "SP",
    "id": 3537909,
    "name": "Pilar do Sul"
  },
  {
    "UF": "SP",
    "id": 3538006,
    "name": "Pindamonhangaba"
  },
  {
    "UF": "SP",
    "id": 3538105,
    "name": "Pindorama"
  },
  {
    "UF": "SP",
    "id": 3538204,
    "name": "Pinhalzinho"
  },
  {
    "UF": "SP",
    "id": 3538303,
    "name": "Piquerobi"
  },
  {
    "UF": "SP",
    "id": 3538501,
    "name": "Piquete"
  },
  {
    "UF": "SP",
    "id": 3538600,
    "name": "Piracaia"
  },
  {
    "UF": "SP",
    "id": 3538709,
    "name": "Piracicaba"
  },
  {
    "UF": "SP",
    "id": 3538808,
    "name": "Piraju"
  },
  {
    "UF": "SP",
    "id": 3538907,
    "name": "Pirajuí"
  },
  {
    "UF": "SP",
    "id": 3539004,
    "name": "Pirangi"
  },
  {
    "UF": "SP",
    "id": 3539103,
    "name": "Pirapora do Bom Jesus"
  },
  {
    "UF": "SP",
    "id": 3539202,
    "name": "Pirapozinho"
  },
  {
    "UF": "SP",
    "id": 3539301,
    "name": "Pirassununga"
  },
  {
    "UF": "SP",
    "id": 3539400,
    "name": "Piratininga"
  },
  {
    "UF": "SP",
    "id": 3539509,
    "name": "Pitangueiras"
  },
  {
    "UF": "SP",
    "id": 3539608,
    "name": "Planalto"
  },
  {
    "UF": "SP",
    "id": 3539707,
    "name": "Platina"
  },
  {
    "UF": "SP",
    "id": 3539806,
    "name": "Poá"
  },
  {
    "UF": "SP",
    "id": 3539905,
    "name": "Poloni"
  },
  {
    "UF": "SP",
    "id": 3540002,
    "name": "Pompéia"
  },
  {
    "UF": "SP",
    "id": 3540101,
    "name": "Pongaí"
  },
  {
    "UF": "SP",
    "id": 3540200,
    "name": "Pontal"
  },
  {
    "UF": "SP",
    "id": 3540259,
    "name": "Pontalinda"
  },
  {
    "UF": "SP",
    "id": 3540309,
    "name": "Pontes Gestal"
  },
  {
    "UF": "SP",
    "id": 3540408,
    "name": "Populina"
  },
  {
    "UF": "SP",
    "id": 3540507,
    "name": "Porangaba"
  },
  {
    "UF": "SP",
    "id": 3540606,
    "name": "Porto Feliz"
  },
  {
    "UF": "SP",
    "id": 3540705,
    "name": "Porto Ferreira"
  },
  {
    "UF": "SP",
    "id": 3540754,
    "name": "Potim"
  },
  {
    "UF": "SP",
    "id": 3540804,
    "name": "Potirendaba"
  },
  {
    "UF": "SP",
    "id": 3540853,
    "name": "Pracinha"
  },
  {
    "UF": "SP",
    "id": 3540903,
    "name": "Pradópolis"
  },
  {
    "UF": "SP",
    "id": 3541000,
    "name": "Praia Grande"
  },
  {
    "UF": "SP",
    "id": 3541059,
    "name": "Pratânia"
  },
  {
    "UF": "SP",
    "id": 3541109,
    "name": "Presidente Alves"
  },
  {
    "UF": "SP",
    "id": 3541208,
    "name": "Presidente Bernardes"
  },
  {
    "UF": "SP",
    "id": 3541307,
    "name": "Presidente Epitácio"
  },
  {
    "UF": "SP",
    "id": 3541406,
    "name": "Presidente Prudente"
  },
  {
    "UF": "SP",
    "id": 3541505,
    "name": "Presidente Venceslau"
  },
  {
    "UF": "SP",
    "id": 3541604,
    "name": "Promissão"
  },
  {
    "UF": "SP",
    "id": 3541653,
    "name": "Quadra"
  },
  {
    "UF": "SP",
    "id": 3541703,
    "name": "Quatá"
  },
  {
    "UF": "SP",
    "id": 3541802,
    "name": "Queiroz"
  },
  {
    "UF": "SP",
    "id": 3541901,
    "name": "Queluz"
  },
  {
    "UF": "SP",
    "id": 3542008,
    "name": "Quintana"
  },
  {
    "UF": "SP",
    "id": 3542107,
    "name": "Rafard"
  },
  {
    "UF": "SP",
    "id": 3542206,
    "name": "Rancharia"
  },
  {
    "UF": "SP",
    "id": 3542305,
    "name": "Redenção da Serra"
  },
  {
    "UF": "SP",
    "id": 3542404,
    "name": "Regente Feijó"
  },
  {
    "UF": "SP",
    "id": 3542503,
    "name": "Reginópolis"
  },
  {
    "UF": "SP",
    "id": 3542602,
    "name": "Registro"
  },
  {
    "UF": "SP",
    "id": 3542701,
    "name": "Restinga"
  },
  {
    "UF": "SP",
    "id": 3542800,
    "name": "Ribeira"
  },
  {
    "UF": "SP",
    "id": 3542909,
    "name": "Ribeirão Bonito"
  },
  {
    "UF": "SP",
    "id": 3543006,
    "name": "Ribeirão Branco"
  },
  {
    "UF": "SP",
    "id": 3543105,
    "name": "Ribeirão Corrente"
  },
  {
    "UF": "SP",
    "id": 3543204,
    "name": "Ribeirão do Sul"
  },
  {
    "UF": "SP",
    "id": 3543238,
    "name": "Ribeirão dos Índios"
  },
  {
    "UF": "SP",
    "id": 3543253,
    "name": "Ribeirão Grande"
  },
  {
    "UF": "SP",
    "id": 3543303,
    "name": "Ribeirão Pires"
  },
  {
    "UF": "SP",
    "id": 3543402,
    "name": "Ribeirão Preto"
  },
  {
    "UF": "SP",
    "id": 3543600,
    "name": "Rifaina"
  },
  {
    "UF": "SP",
    "id": 3543709,
    "name": "Rincão"
  },
  {
    "UF": "SP",
    "id": 3543808,
    "name": "Rinópolis"
  },
  {
    "UF": "SP",
    "id": 3543907,
    "name": "Rio Claro"
  },
  {
    "UF": "SP",
    "id": 3544004,
    "name": "Rio das Pedras"
  },
  {
    "UF": "SP",
    "id": 3544103,
    "name": "Rio Grande da Serra"
  },
  {
    "UF": "SP",
    "id": 3544202,
    "name": "Riolândia"
  },
  {
    "UF": "SP",
    "id": 3543501,
    "name": "Riversul"
  },
  {
    "UF": "SP",
    "id": 3544251,
    "name": "Rosana"
  },
  {
    "UF": "SP",
    "id": 3544301,
    "name": "Roseira"
  },
  {
    "UF": "SP",
    "id": 3544400,
    "name": "Rubiácea"
  },
  {
    "UF": "SP",
    "id": 3544509,
    "name": "Rubinéia"
  },
  {
    "UF": "SP",
    "id": 3544608,
    "name": "Sabino"
  },
  {
    "UF": "SP",
    "id": 3544707,
    "name": "Sagres"
  },
  {
    "UF": "SP",
    "id": 3544806,
    "name": "Sales"
  },
  {
    "UF": "SP",
    "id": 3544905,
    "name": "Sales Oliveira"
  },
  {
    "UF": "SP",
    "id": 3545001,
    "name": "Salesópolis"
  },
  {
    "UF": "SP",
    "id": 3545100,
    "name": "Salmourão"
  },
  {
    "UF": "SP",
    "id": 3545159,
    "name": "Saltinho"
  },
  {
    "UF": "SP",
    "id": 3545209,
    "name": "Salto"
  },
  {
    "UF": "SP",
    "id": 3545308,
    "name": "Salto de Pirapora"
  },
  {
    "UF": "SP",
    "id": 3545407,
    "name": "Salto Grande"
  },
  {
    "UF": "SP",
    "id": 3545506,
    "name": "Sandovalina"
  },
  {
    "UF": "SP",
    "id": 3545605,
    "name": "Santa Adélia"
  },
  {
    "UF": "SP",
    "id": 3545704,
    "name": "Santa Albertina"
  },
  {
    "UF": "SP",
    "id": 3545803,
    "name": "Santa Bárbara d'Oeste"
  },
  {
    "UF": "SP",
    "id": 3546009,
    "name": "Santa Branca"
  },
  {
    "UF": "SP",
    "id": 3546108,
    "name": "Santa Clara d'Oeste"
  },
  {
    "UF": "SP",
    "id": 3546207,
    "name": "Santa Cruz da Conceição"
  },
  {
    "UF": "SP",
    "id": 3546256,
    "name": "Santa Cruz da Esperança"
  },
  {
    "UF": "SP",
    "id": 3546306,
    "name": "Santa Cruz das Palmeiras"
  },
  {
    "UF": "SP",
    "id": 3546405,
    "name": "Santa Cruz do Rio Pardo"
  },
  {
    "UF": "SP",
    "id": 3546504,
    "name": "Santa Ernestina"
  },
  {
    "UF": "SP",
    "id": 3546603,
    "name": "Santa Fé do Sul"
  },
  {
    "UF": "SP",
    "id": 3546702,
    "name": "Santa Gertrudes"
  },
  {
    "UF": "SP",
    "id": 3546801,
    "name": "Santa Isabel"
  },
  {
    "UF": "SP",
    "id": 3546900,
    "name": "Santa Lúcia"
  },
  {
    "UF": "SP",
    "id": 3547007,
    "name": "Santa Maria da Serra"
  },
  {
    "UF": "SP",
    "id": 3547106,
    "name": "Santa Mercedes"
  },
  {
    "UF": "SP",
    "id": 3547502,
    "name": "Santa Rita do Passa Quatro"
  },
  {
    "UF": "SP",
    "id": 3547403,
    "name": "Santa Rita d'Oeste"
  },
  {
    "UF": "SP",
    "id": 3547601,
    "name": "Santa Rosa de Viterbo"
  },
  {
    "UF": "SP",
    "id": 3547650,
    "name": "Santa Salete"
  },
  {
    "UF": "SP",
    "id": 3547205,
    "name": "Santana da Ponte Pensa"
  },
  {
    "UF": "SP",
    "id": 3547304,
    "name": "Santana de Parnaíba"
  },
  {
    "UF": "SP",
    "id": 3547700,
    "name": "Santo Anastácio"
  },
  {
    "UF": "SP",
    "id": 3547809,
    "name": "Santo André"
  },
  {
    "UF": "SP",
    "id": 3547908,
    "name": "Santo Antônio da Alegria"
  },
  {
    "UF": "SP",
    "id": 3548005,
    "name": "Santo Antônio de Posse"
  },
  {
    "UF": "SP",
    "id": 3548054,
    "name": "Santo Antônio do Aracanguá"
  },
  {
    "UF": "SP",
    "id": 3548104,
    "name": "Santo Antônio do Jardim"
  },
  {
    "UF": "SP",
    "id": 3548203,
    "name": "Santo Antônio do Pinhal"
  },
  {
    "UF": "SP",
    "id": 3548302,
    "name": "Santo Expedito"
  },
  {
    "UF": "SP",
    "id": 3548401,
    "name": "Santópolis do Aguapeí"
  },
  {
    "UF": "SP",
    "id": 3548500,
    "name": "Santos"
  },
  {
    "UF": "SP",
    "id": 3548609,
    "name": "São Bento do Sapucaí"
  },
  {
    "UF": "SP",
    "id": 3548708,
    "name": "São Bernardo do Campo"
  },
  {
    "UF": "SP",
    "id": 3548807,
    "name": "São Caetano do Sul"
  },
  {
    "UF": "SP",
    "id": 3548906,
    "name": "São Carlos"
  },
  {
    "UF": "SP",
    "id": 3549003,
    "name": "São Francisco"
  },
  {
    "UF": "SP",
    "id": 3549102,
    "name": "São João da Boa Vista"
  },
  {
    "UF": "SP",
    "id": 3549201,
    "name": "São João das Duas Pontes"
  },
  {
    "UF": "SP",
    "id": 3549250,
    "name": "São João de Iracema"
  },
  {
    "UF": "SP",
    "id": 3549300,
    "name": "São João do Pau d'Alho"
  },
  {
    "UF": "SP",
    "id": 3549409,
    "name": "São Joaquim da Barra"
  },
  {
    "UF": "SP",
    "id": 3549508,
    "name": "São José da Bela Vista"
  },
  {
    "UF": "SP",
    "id": 3549607,
    "name": "São José do Barreiro"
  },
  {
    "UF": "SP",
    "id": 3549706,
    "name": "São José do Rio Pardo"
  },
  {
    "UF": "SP",
    "id": 3549805,
    "name": "São José do Rio Preto"
  },
  {
    "UF": "SP",
    "id": 3549904,
    "name": "São José dos Campos"
  },
  {
    "UF": "SP",
    "id": 3549953,
    "name": "São Lourenço da Serra"
  },
  {
    "UF": "SP",
    "id": 3550001,
    "name": "São Luiz do Paraitinga"
  },
  {
    "UF": "SP",
    "id": 3550100,
    "name": "São Manuel"
  },
  {
    "UF": "SP",
    "id": 3550209,
    "name": "São Miguel Arcanjo"
  },
  {
    "UF": "SP",
    "id": 3550308,
    "name": "São Paulo"
  },
  {
    "UF": "SP",
    "id": 3550407,
    "name": "São Pedro"
  },
  {
    "UF": "SP",
    "id": 3550506,
    "name": "São Pedro do Turvo"
  },
  {
    "UF": "SP",
    "id": 3550605,
    "name": "São Roque"
  },
  {
    "UF": "SP",
    "id": 3550704,
    "name": "São Sebastião"
  },
  {
    "UF": "SP",
    "id": 3550803,
    "name": "São Sebastião da Grama"
  },
  {
    "UF": "SP",
    "id": 3550902,
    "name": "São Simão"
  },
  {
    "UF": "SP",
    "id": 3551009,
    "name": "São Vicente"
  },
  {
    "UF": "SP",
    "id": 3551108,
    "name": "Sarapuí"
  },
  {
    "UF": "SP",
    "id": 3551207,
    "name": "Sarutaiá"
  },
  {
    "UF": "SP",
    "id": 3551306,
    "name": "Sebastianópolis do Sul"
  },
  {
    "UF": "SP",
    "id": 3551405,
    "name": "Serra Azul"
  },
  {
    "UF": "SP",
    "id": 3551603,
    "name": "Serra Negra"
  },
  {
    "UF": "SP",
    "id": 3551504,
    "name": "Serrana"
  },
  {
    "UF": "SP",
    "id": 3551702,
    "name": "Sertãozinho"
  },
  {
    "UF": "SP",
    "id": 3551801,
    "name": "Sete Barras"
  },
  {
    "UF": "SP",
    "id": 3551900,
    "name": "Severínia"
  },
  {
    "UF": "SP",
    "id": 3552007,
    "name": "Silveiras"
  },
  {
    "UF": "SP",
    "id": 3552106,
    "name": "Socorro"
  },
  {
    "UF": "SP",
    "id": 3552205,
    "name": "Sorocaba"
  },
  {
    "UF": "SP",
    "id": 3552304,
    "name": "Sud Mennucci"
  },
  {
    "UF": "SP",
    "id": 3552403,
    "name": "Sumaré"
  },
  {
    "UF": "SP",
    "id": 3552551,
    "name": "Suzanápolis"
  },
  {
    "UF": "SP",
    "id": 3552502,
    "name": "Suzano"
  },
  {
    "UF": "SP",
    "id": 3552601,
    "name": "Tabapuã"
  },
  {
    "UF": "SP",
    "id": 3552700,
    "name": "Tabatinga"
  },
  {
    "UF": "SP",
    "id": 3552809,
    "name": "Taboão da Serra"
  },
  {
    "UF": "SP",
    "id": 3552908,
    "name": "Taciba"
  },
  {
    "UF": "SP",
    "id": 3553005,
    "name": "Taguaí"
  },
  {
    "UF": "SP",
    "id": 3553104,
    "name": "Taiaçu"
  },
  {
    "UF": "SP",
    "id": 3553203,
    "name": "Taiúva"
  },
  {
    "UF": "SP",
    "id": 3553302,
    "name": "Tambaú"
  },
  {
    "UF": "SP",
    "id": 3553401,
    "name": "Tanabi"
  },
  {
    "UF": "SP",
    "id": 3553500,
    "name": "Tapiraí"
  },
  {
    "UF": "SP",
    "id": 3553609,
    "name": "Tapiratiba"
  },
  {
    "UF": "SP",
    "id": 3553658,
    "name": "Taquaral"
  },
  {
    "UF": "SP",
    "id": 3553708,
    "name": "Taquaritinga"
  },
  {
    "UF": "SP",
    "id": 3553807,
    "name": "Taquarituba"
  },
  {
    "UF": "SP",
    "id": 3553856,
    "name": "Taquarivaí"
  },
  {
    "UF": "SP",
    "id": 3553906,
    "name": "Tarabai"
  },
  {
    "UF": "SP",
    "id": 3553955,
    "name": "Tarumã"
  },
  {
    "UF": "SP",
    "id": 3554003,
    "name": "Tatuí"
  },
  {
    "UF": "SP",
    "id": 3554102,
    "name": "Taubaté"
  },
  {
    "UF": "SP",
    "id": 3554201,
    "name": "Tejupá"
  },
  {
    "UF": "SP",
    "id": 3554300,
    "name": "Teodoro Sampaio"
  },
  {
    "UF": "SP",
    "id": 3554409,
    "name": "Terra Roxa"
  },
  {
    "UF": "SP",
    "id": 3554508,
    "name": "Tietê"
  },
  {
    "UF": "SP",
    "id": 3554607,
    "name": "Timburi"
  },
  {
    "UF": "SP",
    "id": 3554656,
    "name": "Torre de Pedra"
  },
  {
    "UF": "SP",
    "id": 3554706,
    "name": "Torrinha"
  },
  {
    "UF": "SP",
    "id": 3554755,
    "name": "Trabiju"
  },
  {
    "UF": "SP",
    "id": 3554805,
    "name": "Tremembé"
  },
  {
    "UF": "SP",
    "id": 3554904,
    "name": "Três Fronteiras"
  },
  {
    "UF": "SP",
    "id": 3554953,
    "name": "Tuiuti"
  },
  {
    "UF": "SP",
    "id": 3555000,
    "name": "Tupã"
  },
  {
    "UF": "SP",
    "id": 3555109,
    "name": "Tupi Paulista"
  },
  {
    "UF": "SP",
    "id": 3555208,
    "name": "Turiúba"
  },
  {
    "UF": "SP",
    "id": 3555307,
    "name": "Turmalina"
  },
  {
    "UF": "SP",
    "id": 3555356,
    "name": "Ubarana"
  },
  {
    "UF": "SP",
    "id": 3555406,
    "name": "Ubatuba"
  },
  {
    "UF": "SP",
    "id": 3555505,
    "name": "Ubirajara"
  },
  {
    "UF": "SP",
    "id": 3555604,
    "name": "Uchoa"
  },
  {
    "UF": "SP",
    "id": 3555703,
    "name": "União Paulista"
  },
  {
    "UF": "SP",
    "id": 3555802,
    "name": "Urânia"
  },
  {
    "UF": "SP",
    "id": 3555901,
    "name": "Uru"
  },
  {
    "UF": "SP",
    "id": 3556008,
    "name": "Urupês"
  },
  {
    "UF": "SP",
    "id": 3556107,
    "name": "Valentim Gentil"
  },
  {
    "UF": "SP",
    "id": 3556206,
    "name": "Valinhos"
  },
  {
    "UF": "SP",
    "id": 3556305,
    "name": "Valparaíso"
  },
  {
    "UF": "SP",
    "id": 3556354,
    "name": "Vargem"
  },
  {
    "UF": "SP",
    "id": 3556404,
    "name": "Vargem Grande do Sul"
  },
  {
    "UF": "SP",
    "id": 3556453,
    "name": "Vargem Grande Paulista"
  },
  {
    "UF": "SP",
    "id": 3556503,
    "name": "Várzea Paulista"
  },
  {
    "UF": "SP",
    "id": 3556602,
    "name": "Vera Cruz"
  },
  {
    "UF": "SP",
    "id": 3556701,
    "name": "Vinhedo"
  },
  {
    "UF": "SP",
    "id": 3556800,
    "name": "Viradouro"
  },
  {
    "UF": "SP",
    "id": 3556909,
    "name": "Vista Alegre do Alto"
  },
  {
    "UF": "SP",
    "id": 3556958,
    "name": "Vitória Brasil"
  },
  {
    "UF": "SP",
    "id": 3557006,
    "name": "Votorantim"
  },
  {
    "UF": "SP",
    "id": 3557105,
    "name": "Votuporanga"
  },
  {
    "UF": "SP",
    "id": 3557154,
    "name": "Zacarias"
  }
]

export default cities