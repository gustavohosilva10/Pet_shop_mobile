Instalação do projeto e dependencias


manual react native 

1. cria projeto 

2. instalar ( npm install) 
### bibliotecas uteis

3. npm install styled-components

4. npm install @react-navigation/native

5. expo install react-native-gesture-handler react-native-reanimated react-native-screens react-native-safe-area-context @react-native-community/masked-view

6. npm install @react-navigation/stack

7. npm install @react-navigation/bottom-tabs

8. expo install @react-native-async-storage/async-storage


9. npm install @react-native-community/geolocation

10. npm install react-native-permissions

11. npm install react-native-swiper

12. npm install react-native-svg

13. npm add --dev react-native-svg-transformer


###########################################

criar arquivo com o nome (metro.config.js)

adicionar dentro do arquivo 

const { getDefaultConfig } = require("metro-config");

module.exports = (async () => {
  const {
    resolver: { sourceExts, assetExts }
  } = await getDefaultConfig(__dirname);
  return {
    transformer: {
      getTransformOptions: async () => ({
        transform: {
          experimentalImportSupport: false,
          inlineRequires: false,
        },
      }),
      babelTransformerPath: require.resolve("react-native-svg-transformer"),
    },
    resolver: {
      assetExts: assetExts.filter(ext => ext !== "svg"),
      sourceExts: [...sourceExts, "svg"]
    }
  };
})();

##############################################################

em app.json adicionar

"expo": {
    "packagerOpts": {
      "config": "metro.config.js",
      "sourceExts": [
        "expo.ts",
        "expo.tsx",
        "expo.js",
        "expo.jsx",
        "ts",
        "tsx",
        "js",
        "jsx",
        "json",
        "wasm",
        "svg"
      ],
      "plugins":[ " @svgr/babel-plugin-transform-react-native-svg" ]
    },


#################################################################
