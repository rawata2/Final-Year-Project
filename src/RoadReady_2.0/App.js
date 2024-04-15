const Stack = createNativeStackNavigator();
import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { useFonts } from "expo-font";
import SignUp from "./screens/SignUp";
import SignOut from "./components/SignOut";
import TheoryOnOffIcon from "./components/TheoryOnOffIcon";
import InstructorsOnOffIcon from "./components/InstructorsOnOffIcon";
import HomeOnOffIcon from "./components/HomeOnOffIcon";
import FrameComponent from "./components/FrameComponent";
import FrameComponent1 from "./components/FrameComponent1";
import FrameComponent2 from "./components/FrameComponent2";
import Frame from "./components/Frame";
import Frame1 from "./components/Frame1";
import Frame2 from "./components/Frame2";
import Frame3 from "./components/Frame3";
import Frame4 from "./components/Frame4";
import Frame5 from "./components/Frame5";
import HomeOnOffIcon1 from "./components/HomeOnOffIcon1";
import DrivingOnOff1 from "./components/DrivingOnOff";
import TheoryOnOffIcon1 from "./components/TheoryOnOffIcon1";
import ProfileOnOffIcon from "./components/ProfileOnOffIcon";
import InstructorsOnOffIcon1 from "./components/InstructorsOnOffIcon1";
import Frame6 from "./components/Frame6";
import Frame7 from "./components/Frame7";
import Frame8 from "./components/Frame8";
import Frame9 from "./components/Frame9";
import Frame10 from "./components/Frame10";
import Frame11 from "./components/Frame11";
import Frame12 from "./components/Frame12";
import Frame13 from "./components/Frame13";
import Frame14 from "./components/Frame14";
import Frame15 from "./components/Frame15";
import HomeButton from "./components/HomeButton";
import DrivingButton from "./components/DrivingButton";
import TheoryButton from "./components/TheoryButton";
import ProfileButton from "./components/ProfileButton";
import InstructorsButton from "./components/InstructorsButton";
import Navigation1 from "./components/Navigation1";
import Navigation2 from "./components/Navigation2";
import Navigation3 from "./components/Navigation3";
import Navigation4 from "./components/Navigation4";
import Navigation5 from "./components/Navigation5";
import OldSidePanel from "./components/SidePanel";
import StatusBar1 from "./components/StatusBar1";
import Navigation31 from "./components/Navigation31";
import Results from "./screens/Results";
import SidePanel1 from "./screens/SidePanel1";
import DrivingTest from "./screens/DrivingTest";
import TestRoute from "./screens/TestRoute";
import TheoryTest from "./screens/TheoryTest";
import PracticeQs from "./screens/PracticeQs";
import Test from "./screens/Test";
import FindInstructors from "./screens/FindInstructors";
import HomePage from "./screens/HomePage";
import SignIn from "./screens/SignIn";
import Fonts from "./components/Fonts";
import ColorSyles from "./components/ColorSyles";
import Icons from "./components/Icons";
import Navigation11 from "./components/Navigation11";
import ProfilePage from "./screens/ProfilePage";
import RoutesPage from "./screens/RoutesPage";
import TestHistory from "./screens/TestHistory";
import PopUp from "./components/PopUp";
import ProfileOnOffIcon1 from "./components/ProfileOnOffIcon1";
import HomeOnOffIcon2 from "./components/HomeOnOffIcon2";
import Group from "./components/Group";
import DrivingOnOff2 from "./components/DrivingOnOff2";
import TheoryOnOffIcon2 from "./components/TheoryOnOffIcon2";
import InstructorsOnOffIcon2 from "./components/InstructorsOnOffIcon2";
import Group1 from "./components/Group1";
import Group2 from "./components/Group2";
import Group4 from "./components/Group4";
import Group5 from "./components/Group5";
import Group3 from "./components/Group3";
import HomeOnOffIcon3 from "./components/HomeOnOffIcon3";
import DriverIcon from "./components/DriverIcon";
import TheoryOnOffIcon3 from "./components/TheoryOnOffIcon3";
import InstructorsOnOffIcon3 from "./components/InstructorsOnOffIcon3";
import ProfileOnOffIcon2 from "./components/ProfileOnOffIcon2";

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { View, Text, Pressable, TouchableOpacity } from "react-native";

import { createDrawerNavigator } from "@react-navigation/drawer";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

const Drawer = createDrawerNavigator();

const Tab = createBottomTabNavigator();

function DrawerRoot({ navigation }) {
  return (
    <Drawer.Navigator
      screenOptions={{ headerShown: false, drawerStyle: { width: 393 } }}
      drawerContent={(props) => <SidePanel1 {...props} />}
    >
      <Drawer.Screen name="BottomTabsRoot" component={BottomTabsRoot} />
      <Drawer.Screen
        name="RoutesPage"
        component={RoutesPage}
        options={{ headerShown: false }}
      />
    </Drawer.Navigator>
  );
}
function BottomTabsRoot({ navigation }) {
  const [bottomTabItemsNormal] = React.useState([
    <HomeOnOffIcon3 />,
    <DriverIcon />,
    <TheoryOnOffIcon3 />,
    <InstructorsOnOffIcon3 />,
    <ProfileOnOffIcon2 />,
  ]);
  const [bottomTabItemsActive] = React.useState([
    <HomeOnOffIcon2 />,
    <DrivingOnOff2 />,
    <TheoryOnOffIcon2 />,
    <InstructorsOnOffIcon2 />,
    <ProfileOnOffIcon1 />,
  ]);
  return (
    <Tab.Navigator
      screenOptions={{ headerShown: false }}
      tabBar={({ state, descriptors, navigation }) => {
        const activeIndex = state.index;
        return (
          <View
            style={{
              alignSelf: "stretch",
              backgroundColor: "#f1f1f1",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
              paddingHorizontal: 30,
              paddingVertical: 15,
              height: 60,
            }}
          >
            {bottomTabItemsNormal.map((item, index) => {
              const isFocused = state.index === index;
              return (
                <Pressable
                  key={index}
                  onPress={() => {
                    navigation.navigate({
                      name: state.routes[index].name,
                      merge: true,
                    });
                  }}
                >
                  {activeIndex === index
                    ? bottomTabItemsActive[index] || item
                    : item}
                </Pressable>
              );
            })}
          </View>
        );
      }}
    >
      <Tab.Screen
        name="HomePage"
        component={HomePage}
        options={{ headerShown: false }}
      />
      <Tab.Screen
        name="DrivingTest"
        component={DrivingTest}
        options={{ headerShown: false }}
      />
      <Tab.Screen
        name="TheoryTest"
        component={TheoryTest}
        options={{ headerShown: false }}
      />
      <Tab.Screen
        name="FindInstructors"
        component={FindInstructors}
        options={{ headerShown: false }}
      />
      <Tab.Screen
        name="ProfilePage"
        component={ProfilePage}
        options={{ headerShown: false }}
      />
    </Tab.Navigator>
  );
}

const App = () => {
  const [hideSplashScreen, setHideSplashScreen] = React.useState(true);

  const [fontsLoaded, error] = useFonts({
    "Inter-Regular": require("./assets/fonts/Inter-Regular.ttf"),
    "Inter-SemiBold": require("./assets/fonts/Inter-SemiBold.ttf"),
    "Inter-Bold": require("./assets/fonts/Inter-Bold.ttf"),
    "Roboto-Regular": require("./assets/fonts/Roboto-Regular.ttf"),
    "Roboto-Medium": require("./assets/fonts/Roboto-Medium.ttf"),
    "Roboto-Bold": require("./assets/fonts/Roboto-Bold.ttf"),
    "Poppins-Regular": require("./assets/fonts/Poppins-Regular.ttf"),
    "Poppins-Medium": require("./assets/fonts/Poppins-Medium.ttf"),
    "Poppins-SemiBold": require("./assets/fonts/Poppins-SemiBold.ttf"),
  });

  if (!fontsLoaded && !error) {
    return null;
  }

  return (
    <>
      <NavigationContainer>
        {hideSplashScreen ? (
          <Stack.Navigator
            initialRouteName="SignIn"
            screenOptions={{ headerShown: false }}
          >
            <Stack.Screen name="DrawerRoot" component={DrawerRoot} />

            <Stack.Screen
              name="SignUp"
              component={SignUp}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Results"
              component={Results}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="TestRoute"
              component={TestRoute}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="PracticeQs"
              component={PracticeQs}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Test"
              component={Test}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="SignIn"
              component={SignIn}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="TestHistory"
              component={TestHistory}
              options={{ headerShown: false }}
            />
          </Stack.Navigator>
        ) : null}
      </NavigationContainer>
    </>
  );
};
export default App;
