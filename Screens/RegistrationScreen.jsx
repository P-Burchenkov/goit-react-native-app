import {
  StyleSheet,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,
  ImageBackground,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { useState, useEffect } from "react";

const bgImage = require("../assets/images/background.jpg");
const initialState = {
  login: "",
  email: "",
  password: "",
};

export default function RegistrationScreen() {
  const [isPasswordShown, setIsPasswordShown] = useState(false);
  const [keyboardStatus, setKeyboardStatus] = useState(false);
  const [state, setstate] = useState(initialState);
  const [isLoginFocused, setIsLoginFocused] = useState(false);
  const [isEmailFocused, setIsEmailFocused] = useState(false);
  const [isPasswordFocused, setIsPasswordFocused] = useState(false);

  useEffect(() => {
    const showSubscription = Keyboard.addListener("keyboardDidShow", () => {
      setKeyboardStatus(true);
    });
    const hideSubscription = Keyboard.addListener("keyboardDidHide", () => {
      setKeyboardStatus(false);
    });

    return () => {
      showSubscription.remove();
      hideSubscription.remove();
    };
  }, []);

  const toglePassword = () => {
    setIsPasswordShown((prevState) => {
      return !prevState;
    });
  };

  const handlesubmit = () => {
    console.log(state);
    setstate(initialState);
    Keyboard.dismiss();
  };

  return (
    <TouchableWithoutFeedback
      onPress={() => {
        Keyboard.dismiss();
      }}
    >
      <View style={styles.container}>
        <ImageBackground source={bgImage} style={styles.bgImage}>
          <KeyboardAvoidingView
            behavior={Platform.OS === "ios" ? "padding" : "height"}
          >
            <View
              style={{
                ...styles.form,
                paddingBottom: keyboardStatus ? 120 : 45,
              }}
            >
              <View style={styles.fotoWrapper}>
                <TouchableOpacity style={styles.addFotoBtn}>
                  <AntDesign
                    name="pluscircleo"
                    size={24}
                    style={styles.addIcon}
                  />
                </TouchableOpacity>
              </View>
              <View style={{ marginHorizontal: 16 }}>
                <Text style={styles.registrationTitle}>Реєстрація</Text>
                <TextInput
                  style={{
                    ...styles.input,
                    borderColor: isLoginFocused ? "#FF6C00" : "#E8E8E8",
                  }}
                  placeholder="логін"
                  placeholderTextColor="#BDBDBD"
                  value={state.login}
                  onChangeText={(value) => {
                    setstate((prevState) => ({ ...prevState, login: value }));
                  }}
                  onFocus={() => {
                    setIsLoginFocused(true);
                  }}
                  onBlur={() => {
                    setIsLoginFocused(false);
                  }}
                />
                <TextInput
                  placeholderTextColor="#BDBDBD"
                  style={{
                    ...styles.input,
                    borderColor: isEmailFocused ? "#FF6C00" : "#E8E8E8",
                  }}
                  placeholder="Адреса електронної пошти"
                  value={state.email}
                  onChangeText={(value) => {
                    setstate((prevState) => ({ ...prevState, email: value }));
                  }}
                  onFocus={() => {
                    setIsEmailFocused(true);
                  }}
                  onBlur={() => {
                    setIsEmailFocused(false);
                  }}
                />
                <TextInput
                  style={{
                    ...styles.input,
                    paddingRight: 100,
                    borderColor: isPasswordFocused ? "#FF6C00" : "#E8E8E8",
                  }}
                  placeholder="Пароль"
                  placeholderTextColor="#BDBDBD"
                  secureTextEntry={isPasswordShown}
                  clearButtonMode="always"
                  value={state.password}
                  onChangeText={(value) => {
                    setstate((prevState) => ({
                      ...prevState,
                      password: value,
                    }));
                  }}
                  onFocus={() => {
                    setIsPasswordFocused(true);
                  }}
                  onBlur={() => {
                    setIsPasswordFocused(false);
                  }}
                />
                <TouchableOpacity
                  style={styles.btnShowPassword}
                  activeOpacity={0.8}
                  onPress={toglePassword}
                >
                  <Text style={styles.btnShowPasswordText}>
                    {isPasswordShown ? "Показати" : "Сховати"}
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={styles.btn}
                  activeOpacity={0.8}
                  onPress={handlesubmit}
                >
                  <Text style={styles.btnText}>Зареєструватися</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.link} activeOpacity={0.8}>
                  <Text style={styles.linkText}>Вже є акаунт? Увійти</Text>
                </TouchableOpacity>
              </View>
            </View>
          </KeyboardAvoidingView>
        </ImageBackground>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  bgImage: {
    flex: 1,
    justifyContent: "flex-end",
  },

  form: {
    backgroundColor: "#FFFFFF",
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    paddingTop: 92,
  },
  fotoWrapper: {
    position: "absolute",
    left: "50%",
    top: -60,
    transform: "translate(-60px)",
    width: 120,
    height: 120,
    borderWidth: 1,
    borderRadius: 16,
    borderColor: "transparent",
    backgroundColor: "#F6F6F6",
  },
  addFotoBtn: {
    position: "absolute",
    bottom: 9,
    right: -12,
    width: 25,
    height: 25,
  },
  addIcon: {
    color: "#E8E8E8",
  },
  registrationTitle: {
    marginBottom: 33,
    textAlign: "center",
    fontSize: 30,
    fontFamily: "Roboto-Medium",
    color: "#212121",
  },
  input: {
    marginBottom: 16,
    height: 50,
    padding: 16,
    borderWidth: 1,
    borderRadius: 8,
    borderColor: "#E8E8E8",
    fontFamily: "Roboto-Regular",
  },
  btnShowPassword: {
    position: "absolute",
    top: 220,
    right: 20,
  },
  btnShowPasswordText: {
    fontSize: 16,
    color: "#1B4371",
    fontFamily: "Roboto-Regular",
  },
  btn: {
    borderWidth: 1,
    borderRadius: 100,
    paddingVertical: 16,
    paddingHorizontal: 32,
    marginTop: 43,
    backgroundColor: "#FF6C00",
    borderColor: "transparent",
  },
  btnText: {
    fontSize: 16,
    textAlign: "center",
    color: "#ffffff",
    fontFamily: "Roboto-Regular",
  },
  link: {},
  linkText: {
    marginTop: 16,
    fontSize: 16,
    textAlign: "center",
    color: "#1B4371",
    fontFamily: "Roboto-Regular",
  },
});
