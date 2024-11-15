import { NativeStackScreenProps } from "@react-navigation/native-stack";
import {
  ImageBackground,
  StyleSheet,
  View,
  Text,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import { RootStackParamList } from "../../types";
import { style } from "./DashboardScreenStyle";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import FontAwesome5 from "@expo/vector-icons/FontAwesome5";
import Ionicons from "@expo/vector-icons/Ionicons";

type DashboardScreenProps = NativeStackScreenProps<
  RootStackParamList,
  "Dashboard"
>;

const DashboardScreen: React.FC<DashboardScreenProps> = (props) => {
  const renderCampaignName = () => {
    return (
      <View style={style.headerNameView}>
        <Text style={style.headerTxtValue}>Campaign Name:</Text>
        <Text style={style.headerTxtKey}>Campaign ABCD</Text>
      </View>
    );
  };
  const renderHorizontalMenus = () => {
    return (
      <View style={style.hmView}>
        <ScrollView horizontal contentContainerStyle={{ paddingRight: "50%" }}>
          {/* Leads */}
          <TouchableOpacity
            style={style.menuItemView}
            onPress={() => {
              props.navigation.navigate("Leads");
            }}
          >
            <FontAwesome5 name="fire" size={40} style={style.menuIcon} />
            <Text style={style.menuTxt}>Leads</Text>
          </TouchableOpacity>
          {/* Campaign */}
          <TouchableOpacity
            style={style.menuItemView}
            onPress={() => {
              props.navigation.navigate("Campaigns");
            }}
          >
            <MaterialIcons name="campaign" size={40} style={style.menuIcon} />
            <Text style={style.menuTxt}>Campaign</Text>
          </TouchableOpacity>
          {/* Users */}
          <TouchableOpacity
            style={style.menuItemView}
            onPress={() => {
              props.navigation.navigate("Users");
            }}
          >
            <FontAwesome5 name="users" size={40} style={style.menuIcon} />
            <Text style={style.menuTxt}>Users</Text>
          </TouchableOpacity>
          {/* Approvals */}
          <TouchableOpacity
            style={style.menuItemView}
            onPress={() => {
              props.navigation.navigate("Approvals");
            }}
          >
            <Ionicons
              name="shield-checkmark"
              size={40}
              style={style.menuIcon}
            />
            <Text style={style.menuTxt}>Approvals</Text>
          </TouchableOpacity>
          {/* Gifts */}
          <TouchableOpacity
            style={style.menuItemView}
            onPress={() => {
              props.navigation.navigate("Gifts");
            }}
          >
            <FontAwesome5 name="gifts" size={40} style={style.menuIcon} />
            <Text style={style.menuTxt}>Gifts</Text>
          </TouchableOpacity>
          {/* Reports */}
          <TouchableOpacity
            style={style.menuItemView}
            onPress={() => {
              props.navigation.navigate("Reports");
            }}
          >
            <FontAwesome5
              name="file-contract"
              size={40}
              style={style.menuIcon}
            />
            <Text style={style.menuTxt}>Reports</Text>
          </TouchableOpacity>
        </ScrollView>
      </View>
    );
  };
  const renderCountBox = () => {
    return (
      <View style={style.countBox}>
        <Text style={style.cbText}>Details</Text>
        <View style={{ flexDirection: "row" }}>
          <View style={style.subCBBox}>
            <Text style={style.countLabel}>No. of Leads</Text>
            <Text style={style.countTxt}>30</Text>
          </View>
          <View style={style.subCBBox}>
            <Text style={style.countLabel}>Footfall</Text>
            <Text style={style.countTxt}>100</Text>
          </View>
        </View>
      </View>
    );
  };
  const data = [
    {
      id: "1",
      name: "424",
      no: "2",
    },
    {
      id: "2",
      name: "2021",
      no: "4",
    },
    {
      id: "3",
      name: "D5",
      no: "8",
    },
    {
      id: "4",
      name: "320D SERIES 2",
      no: "10",
    },
    {
      id: "5",
      name: "329D",
      no: "12",
    },
    {
      id: "6",
      name: "336D",
      no: "14",
    },
  ];
  const renderModelDetails = () => {
    return (
      <View style={style.tableView}>
        <View style={style.tbHeaderView}>
          <Text style={style.tbHeaderLeftText}>Model</Text>
          <Text style={style.tbHeaderRightText}>No of Machines</Text>
        </View>
        {data.map((item, i) => (
          <View style={style.tbHeaderView}>
            <Text style={style.tbLeftText}>{item.name}</Text>
            <Text style={style.tbRightText}>{item.no}</Text>
          </View>
        ))}
      </View>
    );
  };
  return (
    <ImageBackground
      source={require("../../assets/background_image.png")}
      style={{ flex: 1 }}
    >
      {renderHorizontalMenus()}
      {renderCampaignName()}
      {renderCountBox()}
      {renderModelDetails()}
    </ImageBackground>
  );
};
export default DashboardScreen;
