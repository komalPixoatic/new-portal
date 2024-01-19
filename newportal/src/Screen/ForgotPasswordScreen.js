import React, { useState, useEffect } from 'react';
import { Text, View, StyleSheet, Image, Modal, FlatList, TouchableOpacity, TextInput } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import PhoneInput from 'react-native-phone-input'
import Getotp from './Getotp';
const ForgotPasswordScreen = ({ navigation }) => {
  const data = [
    {
      "id": "AF",
      "type": "country_code_and_flag",
      "attributes": {
        "name": "Afghanistan",
        "emoji_flag": "🇦🇫",
        "country_code": "93"
      }
    },
    {
      "id": "AL",
      "type": "country_code_and_flag",
      "attributes": {
        "name": "Albania",
        "emoji_flag": "🇦🇱",
        "country_code": "355"
      }
    },
    {
      "id": "DZ",
      "type": "country_code_and_flag",
      "attributes": {
        "name": "Algeria",
        "emoji_flag": "🇩🇿",
        "country_code": "213"
      }
    },
    {
      "id": "AS",
      "type": "country_code_and_flag",
      "attributes": {
        "name": "American Samoa",
        "emoji_flag": "🇦🇸",
        "country_code": "1684"
      }
    },
    {
      "id": "AD",
      "type": "country_code_and_flag",
      "attributes": {
        "name": "Andorra",
        "emoji_flag": "🇦🇩",
        "country_code": "376"
      }
    },
    {
      "id": "AO",
      "type": "country_code_and_flag",
      "attributes": {
        "name": "Angola",
        "emoji_flag": "🇦🇴",
        "country_code": "244"
      }
    },
    {
      "id": "AI",
      "type": "country_code_and_flag",
      "attributes": {
        "name": "Anguilla",
        "emoji_flag": "🇦🇮",
        "country_code": "1264"
      }
    },
    {
      "id": "AQ",
      "type": "country_code_and_flag",
      "attributes": {
        "name": "Antarctica",
        "emoji_flag": "🇦🇶",
        "country_code": "672"
      }
    },
    {
      "id": "AG",
      "type": "country_code_and_flag",
      "attributes": {
        "name": "Antigua and Barbuda",
        "emoji_flag": "🇦🇬",
        "country_code": "1268"
      }
    },
    {
      "id": "AR",
      "type": "country_code_and_flag",
      "attributes": {
        "name": "Argentina",
        "emoji_flag": "🇦🇷",
        "country_code": "54"
      }
    },
    {
      "id": "AM",
      "type": "country_code_and_flag",
      "attributes": {
        "name": "Armenia",
        "emoji_flag": "🇦🇲",
        "country_code": "374"
      }
    },
    {
      "id": "AW",
      "type": "country_code_and_flag",
      "attributes": {
        "name": "Aruba",
        "emoji_flag": "🇦🇼",
        "country_code": "297"
      }
    },
    {
      "id": "AU",
      "type": "country_code_and_flag",
      "attributes": {
        "name": "Australia",
        "emoji_flag": "🇦🇺",
        "country_code": "61"
      }
    },
    {
      "id": "AT",
      "type": "country_code_and_flag",
      "attributes": {
        "name": "Austria",
        "emoji_flag": "🇦🇹",
        "country_code": "43"
      }
    },
    {
      "id": "AZ",
      "type": "country_code_and_flag",
      "attributes": {
        "name": "Azerbaijan",
        "emoji_flag": "🇦🇿",
        "country_code": "994"
      }
    },
    {
      "id": "BS",
      "type": "country_code_and_flag",
      "attributes": {
        "name": "Bahamas",
        "emoji_flag": "🇧🇸",
        "country_code": "1242"
      }
    },
    {
      "id": "BH",
      "type": "country_code_and_flag",
      "attributes": {
        "name": "Bahrain",
        "emoji_flag": "🇧🇭",
        "country_code": "973"
      }
    },
    {
      "id": "BD",
      "type": "country_code_and_flag",
      "attributes": {
        "name": "Bangladesh",
        "emoji_flag": "🇧🇩",
        "country_code": "880"
      }
    },
    {
      "id": "BB",
      "type": "country_code_and_flag",
      "attributes": {
        "name": "Barbados",
        "emoji_flag": "🇧🇧",
        "country_code": "1246"
      }
    },
    {
      "id": "BY",
      "type": "country_code_and_flag",
      "attributes": {
        "name": "Belarus",
        "emoji_flag": "🇧🇾",
        "country_code": "375"
      }
    },
    {
      "id": "BE",
      "type": "country_code_and_flag",
      "attributes": {
        "name": "Belgium",
        "emoji_flag": "🇧🇪",
        "country_code": "32"
      }
    },
    {
      "id": "BZ",
      "type": "country_code_and_flag",
      "attributes": {
        "name": "Belize",
        "emoji_flag": "🇧🇿",
        "country_code": "501"
      }
    },
    {
      "id": "BJ",
      "type": "country_code_and_flag",
      "attributes": {
        "name": "Benin",
        "emoji_flag": "🇧🇯",
        "country_code": "229"
      }
    },
    {
      "id": "BM",
      "type": "country_code_and_flag",
      "attributes": {
        "name": "Bermuda",
        "emoji_flag": "🇧🇲",
        "country_code": "1441"
      }
    },
    {
      "id": "BT",
      "type": "country_code_and_flag",
      "attributes": {
        "name": "Bhutan",
        "emoji_flag": "🇧🇹",
        "country_code": "975"
      }
    },
    {
      "id": "BO",
      "type": "country_code_and_flag",
      "attributes": {
        "name": "Bolivia (Plurinational State of)",
        "emoji_flag": "🇧🇴",
        "country_code": "591"
      }
    },
    {
      "id": "BQ",
      "type": "country_code_and_flag",
      "attributes": {
        "name": "Bonaire, Sint Eustatius and Saba",
        "emoji_flag": "🇧🇶",
        "country_code": "599"
      }
    },
    {
      "id": "BA",
      "type": "country_code_and_flag",
      "attributes": {
        "name": "Bosnia and Herzegovina",
        "emoji_flag": "🇧🇦",
        "country_code": "387"
      }
    },
    {
      "id": "BW",
      "type": "country_code_and_flag",
      "attributes": {
        "name": "Botswana",
        "emoji_flag": "🇧🇼",
        "country_code": "267"
      }
    },
    {
      "id": "BV",
      "type": "country_code_and_flag",
      "attributes": {
        "name": "Bouvet Island",
        "emoji_flag": "🇧🇻",
        "country_code": "47"
      }
    },
    {
      "id": "BR",
      "type": "country_code_and_flag",
      "attributes": {
        "name": "Brazil",
        "emoji_flag": "🇧🇷",
        "country_code": "55"
      }
    },
    {
      "id": "IO",
      "type": "country_code_and_flag",
      "attributes": {
        "name": "British Indian Ocean Territory",
        "emoji_flag": "🇮🇴",
        "country_code": "246"
      }
    },
    {
      "id": "BN",
      "type": "country_code_and_flag",
      "attributes": {
        "name": "Brunei Darussalam",
        "emoji_flag": "🇧🇳",
        "country_code": "673"
      }
    },
    {
      "id": "BG",
      "type": "country_code_and_flag",
      "attributes": {
        "name": "Bulgaria",
        "emoji_flag": "🇧🇬",
        "country_code": "359"
      }
    },
    {
      "id": "BF",
      "type": "country_code_and_flag",
      "attributes": {
        "name": "Burkina Faso",
        "emoji_flag": "🇧🇫",
        "country_code": "226"
      }
    },
    {
      "id": "BI",
      "type": "country_code_and_flag",
      "attributes": {
        "name": "Burundi",
        "emoji_flag": "🇧🇮",
        "country_code": "257"
      }
    },
    {
      "id": "CV",
      "type": "country_code_and_flag",
      "attributes": {
        "name": "Cabo Verde",
        "emoji_flag": "🇨🇻",
        "country_code": "238"
      }
    },
    {
      "id": "KH",
      "type": "country_code_and_flag",
      "attributes": {
        "name": "Cambodia",
        "emoji_flag": "🇰🇭",
        "country_code": "855"
      }
    },
    {
      "id": "CM",
      "type": "country_code_and_flag",
      "attributes": {
        "name": "Cameroon",
        "emoji_flag": "🇨🇲",
        "country_code": "237"
      }
    },
    {
      "id": "CA",
      "type": "country_code_and_flag",
      "attributes": {
        "name": "Canada",
        "emoji_flag": "🇨🇦",
        "country_code": "1"
      }
    },
    {
      "id": "KY",
      "type": "country_code_and_flag",
      "attributes": {
        "name": "Cayman Islands",
        "emoji_flag": "🇰🇾",
        "country_code": "1345"
      }
    },
    {
      "id": "CF",
      "type": "country_code_and_flag",
      "attributes": {
        "name": "Central African Republic",
        "emoji_flag": "🇨🇫",
        "country_code": "236"
      }
    },
    {
      "id": "TD",
      "type": "country_code_and_flag",
      "attributes": {
        "name": "Chad",
        "emoji_flag": "🇹🇩",
        "country_code": "235"
      }
    },
    {
      "id": "CL",
      "type": "country_code_and_flag",
      "attributes": {
        "name": "Chile",
        "emoji_flag": "🇨🇱",
        "country_code": "56"
      }
    },
    {
      "id": "CN",
      "type": "country_code_and_flag",
      "attributes": {
        "name": "China",
        "emoji_flag": "🇨🇳",
        "country_code": "86"
      }
    },
    {
      "id": "CX",
      "type": "country_code_and_flag",
      "attributes": {
        "name": "Christmas Island",
        "emoji_flag": "🇨🇽",
        "country_code": "61"
      }
    },
    {
      "id": "CC",
      "type": "country_code_and_flag",
      "attributes": {
        "name": "Cocos (Keeling) Islands",
        "emoji_flag": "🇨🇨",
        "country_code": "61"
      }
    },
    {
      "id": "CO",
      "type": "country_code_and_flag",
      "attributes": {
        "name": "Colombia",
        "emoji_flag": "🇨🇴",
        "country_code": "57"
      }
    },
    {
      "id": "KM",
      "type": "country_code_and_flag",
      "attributes": {
        "name": "Comoros",
        "emoji_flag": "🇰🇲",
        "country_code": "269"
      }
    },
    {
      "id": "CG",
      "type": "country_code_and_flag",
      "attributes": {
        "name": "Congo",
        "emoji_flag": "🇨🇬",
        "country_code": "242"
      }
    },
    {
      "id": "CD",
      "type": "country_code_and_flag",
      "attributes": {
        "name": "Congo (Democratic Republic of the)",
        "emoji_flag": "🇨🇩",
        "country_code": "243"
      }
    },
    {
      "id": "CK",
      "type": "country_code_and_flag",
      "attributes": {
        "name": "Cook Islands",
        "emoji_flag": "🇨🇰",
        "country_code": "682"
      }
    },
    {
      "id": "CR",
      "type": "country_code_and_flag",
      "attributes": {
        "name": "Costa Rica",
        "emoji_flag": "🇨🇷",
        "country_code": "506"
      }
    },
    {
      "id": "HR",
      "type": "country_code_and_flag",
      "attributes": {
        "name": "Croatia",
        "emoji_flag": "🇭🇷",
        "country_code": "385"
      }
    },
    {
      "id": "CU",
      "type": "country_code_and_flag",
      "attributes": {
        "name": "Cuba",
        "emoji_flag": "🇨🇺",
        "country_code": "53"
      }
    },
    {
      "id": "CW",
      "type": "country_code_and_flag",
      "attributes": {
        "name": "Curaçao",
        "emoji_flag": "🇨🇼",
        "country_code": "599"
      }
    },
    {
      "id": "CY",
      "type": "country_code_and_flag",
      "attributes": {
        "name": "Cyprus",
        "emoji_flag": "🇨🇾",
        "country_code": "357"
      }
    },
    {
      "id": "CZ",
      "type": "country_code_and_flag",
      "attributes": {
        "name": "Czech Republic",
        "emoji_flag": "🇨🇿",
        "country_code": "420"
      }
    },
    {
      "id": "CI",
      "type": "country_code_and_flag",
      "attributes": {
        "name": "Côte d'Ivoire",
        "emoji_flag": "🇨🇮",
        "country_code": "225"
      }
    },
    {
      "id": "DK",
      "type": "country_code_and_flag",
      "attributes": {
        "name": "Denmark",
        "emoji_flag": "🇩🇰",
        "country_code": "45"
      }
    },
    {
      "id": "DJ",
      "type": "country_code_and_flag",
      "attributes": {
        "name": "Djibouti",
        "emoji_flag": "🇩🇯",
        "country_code": "253"
      }
    },
    {
      "id": "DM",
      "type": "country_code_and_flag",
      "attributes": {
        "name": "Dominica",
        "emoji_flag": "🇩🇲",
        "country_code": "1767"
      }
    },
    {
      "id": "DO",
      "type": "country_code_and_flag",
      "attributes": {
        "name": "Dominican Republic",
        "emoji_flag": "🇩🇴",
        "country_code": "1"
      }
    },
    {
      "id": "EC",
      "type": "country_code_and_flag",
      "attributes": {
        "name": "Ecuador",
        "emoji_flag": "🇪🇨",
        "country_code": "593"
      }
    },
    {
      "id": "EG",
      "type": "country_code_and_flag",
      "attributes": {
        "name": "Egypt",
        "emoji_flag": "🇪🇬",
        "country_code": "20"
      }
    },
    {
      "id": "SV",
      "type": "country_code_and_flag",
      "attributes": {
        "name": "El Salvador",
        "emoji_flag": "🇸🇻",
        "country_code": "503"
      }
    },
    {
      "id": "GQ",
      "type": "country_code_and_flag",
      "attributes": {
        "name": "Equatorial Guinea",
        "emoji_flag": "🇬🇶",
        "country_code": "240"
      }
    },
    {
      "id": "ER",
      "type": "country_code_and_flag",
      "attributes": {
        "name": "Eritrea",
        "emoji_flag": "🇪🇷",
        "country_code": "291"
      }
    },
    {
      "id": "EE",
      "type": "country_code_and_flag",
      "attributes": {
        "name": "Estonia",
        "emoji_flag": "🇪🇪",
        "country_code": "372"
      }
    },
    {
      "id": "ET",
      "type": "country_code_and_flag",
      "attributes": {
        "name": "Ethiopia",
        "emoji_flag": "🇪🇹",
        "country_code": "251"
      }
    },
    {
      "id": "FK",
      "type": "country_code_and_flag",
      "attributes": {
        "name": "Falkland Islands (Malvinas)",
        "emoji_flag": "🇫🇰",
        "country_code": "500"
      }
    },
    {
      "id": "FO",
      "type": "country_code_and_flag",
      "attributes": {
        "name": "Faroe Islands",
        "emoji_flag": "🇫🇴",
        "country_code": "298"
      }
    },
    {
      "id": "FJ",
      "type": "country_code_and_flag",
      "attributes": {
        "name": "Fiji",
        "emoji_flag": "🇫🇯",
        "country_code": "679"
      }
    },
    {
      "id": "FI",
      "type": "country_code_and_flag",
      "attributes": {
        "name": "Finland",
        "emoji_flag": "🇫🇮",
        "country_code": "358"
      }
    },
    {
      "id": "FR",
      "type": "country_code_and_flag",
      "attributes": {
        "name": "France",
        "emoji_flag": "🇫🇷",
        "country_code": "33"
      }
    },
    {
      "id": "GF",
      "type": "country_code_and_flag",
      "attributes": {
        "name": "French Guiana",
        "emoji_flag": "🇬🇫",
        "country_code": "594"
      }
    },
    {
      "id": "PF",
      "type": "country_code_and_flag",
      "attributes": {
        "name": "French Polynesia",
        "emoji_flag": "🇵🇫",
        "country_code": "689"
      }
    },
    {
      "id": "TF",
      "type": "country_code_and_flag",
      "attributes": {
        "name": "French Southern Territories",
        "emoji_flag": "🇹🇫",
        "country_code": "262"
      }
    },
    {
      "id": "GA",
      "type": "country_code_and_flag",
      "attributes": {
        "name": "Gabon",
        "emoji_flag": "🇬🇦",
        "country_code": "241"
      }
    },
    {
      "id": "GM",
      "type": "country_code_and_flag",
      "attributes": {
        "name": "Gambia",
        "emoji_flag": "🇬🇲",
        "country_code": "220"
      }
    },
    {
      "id": "GE",
      "type": "country_code_and_flag",
      "attributes": {
        "name": "Georgia",
        "emoji_flag": "🇬🇪",
        "country_code": "995"
      }
    },
    {
      "id": "DE",
      "type": "country_code_and_flag",
      "attributes": {
        "name": "Germany",
        "emoji_flag": "🇩🇪",
        "country_code": "49"
      }
    },
    {
      "id": "GH",
      "type": "country_code_and_flag",
      "attributes": {
        "name": "Ghana",
        "emoji_flag": "🇬🇭",
        "country_code": "233"
      }
    },
    {
      "id": "GI",
      "type": "country_code_and_flag",
      "attributes": {
        "name": "Gibraltar",
        "emoji_flag": "🇬🇮",
        "country_code": "350"
      }
    },
    {
      "id": "GR",
      "type": "country_code_and_flag",
      "attributes": {
        "name": "Greece",
        "emoji_flag": "🇬🇷",
        "country_code": "30"
      }
    },
    {
      "id": "GL",
      "type": "country_code_and_flag",
      "attributes": {
        "name": "Greenland",
        "emoji_flag": "🇬🇱",
        "country_code": "299"
      }
    },
    {
      "id": "GD",
      "type": "country_code_and_flag",
      "attributes": {
        "name": "Grenada",
        "emoji_flag": "🇬🇩",
        "country_code": "1473"
      }
    },
    {
      "id": "GP",
      "type": "country_code_and_flag",
      "attributes": {
        "name": "Guadeloupe",
        "emoji_flag": "🇬🇵",
        "country_code": "590"
      }
    },
    {
      "id": "GU",
      "type": "country_code_and_flag",
      "attributes": {
        "name": "Guam",
        "emoji_flag": "🇬🇺",
        "country_code": "1671"
      }
    },
    {
      "id": "GT",
      "type": "country_code_and_flag",
      "attributes": {
        "name": "Guatemala",
        "emoji_flag": "🇬🇹",
        "country_code": "502"
      }
    },
    {
      "id": "GG",
      "type": "country_code_and_flag",
      "attributes": {
        "name": "Guernsey",
        "emoji_flag": "🇬🇬",
        "country_code": "44"
      }
    },
    {
      "id": "GN",
      "type": "country_code_and_flag",
      "attributes": {
        "name": "Guinea",
        "emoji_flag": "🇬🇳",
        "country_code": "224"
      }
    },
    {
      "id": "GW",
      "type": "country_code_and_flag",
      "attributes": {
        "name": "Guinea-Bissau",
        "emoji_flag": "🇬🇼",
        "country_code": "245"
      }
    },
    {
      "id": "GY",
      "type": "country_code_and_flag",
      "attributes": {
        "name": "Guyana",
        "emoji_flag": "🇬🇾",
        "country_code": "592"
      }
    },
    {
      "id": "HT",
      "type": "country_code_and_flag",
      "attributes": {
        "name": "Haiti",
        "emoji_flag": "🇭🇹",
        "country_code": "509"
      }
    },
    {
      "id": "HM",
      "type": "country_code_and_flag",
      "attributes": {
        "name": "Heard Island and McDonald Islands",
        "emoji_flag": "🇭🇲",
        "country_code": 672
      }
    },
    {
      "id": "VA",
      "type": "country_code_and_flag",
      "attributes": {
        "name": "Holy See",
        "emoji_flag": "🇻🇦",
        "country_code": "39"
      }
    },
    {
      "id": "HN",
      "type": "country_code_and_flag",
      "attributes": {
        "name": "Honduras",
        "emoji_flag": "🇭🇳",
        "country_code": "504"
      }
    },
    {
      "id": "HK",
      "type": "country_code_and_flag",
      "attributes": {
        "name": "Hong Kong",
        "emoji_flag": "🇭🇰",
        "country_code": "852"
      }
    },
    {
      "id": "HU",
      "type": "country_code_and_flag",
      "attributes": {
        "name": "Hungary",
        "emoji_flag": "🇭🇺",
        "country_code": "36"
      }
    },
    {
      "id": "IS",
      "type": "country_code_and_flag",
      "attributes": {
        "name": "Iceland",
        "emoji_flag": "🇮🇸",
        "country_code": "354"
      }
    },
    {
      "id": "IN",
      "type": "country_code_and_flag",
      "attributes": {
        "name": "India",
        "emoji_flag": "🇮🇳",
        "country_code": "91"
      }
    },
    {
      "id": "ID",
      "type": "country_code_and_flag",
      "attributes": {
        "name": "Indonesia",
        "emoji_flag": "🇮🇩",
        "country_code": "62"
      }
    },
    {
      "id": "IR",
      "type": "country_code_and_flag",
      "attributes": {
        "name": "Iran (Islamic Republic of)",
        "emoji_flag": "🇮🇷",
        "country_code": "98"
      }
    },
    {
      "id": "IQ",
      "type": "country_code_and_flag",
      "attributes": {
        "name": "Iraq",
        "emoji_flag": "🇮🇶",
        "country_code": "964"
      }
    },
    {
      "id": "IE",
      "type": "country_code_and_flag",
      "attributes": {
        "name": "Ireland",
        "emoji_flag": "🇮🇪",
        "country_code": "353"
      }
    },
    {
      "id": "IM",
      "type": "country_code_and_flag",
      "attributes": {
        "name": "Isle of Man",
        "emoji_flag": "🇮🇲",
        "country_code": "44"
      }
    },
    {
      "id": "IL",
      "type": "country_code_and_flag",
      "attributes": {
        "name": "Israel",
        "emoji_flag": "🇮🇱",
        "country_code": "972"
      }
    },
    {
      "id": "IT",
      "type": "country_code_and_flag",
      "attributes": {
        "name": "Italy",
        "emoji_flag": "🇮🇹",
        "country_code": "39"
      }
    },
    {
      "id": "JM",
      "type": "country_code_and_flag",
      "attributes": {
        "name": "Jamaica",
        "emoji_flag": "🇯🇲",
        "country_code": "1876"
      }
    },
    {
      "id": "JP",
      "type": "country_code_and_flag",
      "attributes": {
        "name": "Japan",
        "emoji_flag": "🇯🇵",
        "country_code": "81"
      }
    },
    {
      "id": "JE",
      "type": "country_code_and_flag",
      "attributes": {
        "name": "Jersey",
        "emoji_flag": "🇯🇪",
        "country_code": "44"
      }
    },
    {
      "id": "JO",
      "type": "country_code_and_flag",
      "attributes": {
        "name": "Jordan",
        "emoji_flag": "🇯🇴",
        "country_code": "962"
      }
    },
    {
      "id": "KZ",
      "type": "country_code_and_flag",
      "attributes": {
        "name": "Kazakhstan",
        "emoji_flag": "🇰🇿",
        "country_code": "7"
      }
    },
    {
      "id": "KE",
      "type": "country_code_and_flag",
      "attributes": {
        "name": "Kenya",
        "emoji_flag": "🇰🇪",
        "country_code": "254"
      }
    },
    {
      "id": "KI",
      "type": "country_code_and_flag",
      "attributes": {
        "name": "Kiribati",
        "emoji_flag": "🇰🇮",
        "country_code": "686"
      }
    },
    {
      "id": "KP",
      "type": "country_code_and_flag",
      "attributes": {
        "name": "Korea (Democratic People's Republic of)",
        "emoji_flag": "🇰🇵",
        "country_code": "850"
      }
    },
    {
      "id": "KR",
      "type": "country_code_and_flag",
      "attributes": {
        "name": "Korea (Republic of)",
        "emoji_flag": "🇰🇷",
        "country_code": "82"
      }
    },
    {
      "id": "KW",
      "type": "country_code_and_flag",
      "attributes": {
        "name": "Kuwait",
        "emoji_flag": "🇰🇼",
        "country_code": "965"
      }
    },
    {
      "id": "KG",
      "type": "country_code_and_flag",
      "attributes": {
        "name": "Kyrgyzstan",
        "emoji_flag": "🇰🇬",
        "country_code": "996"
      }
    },
    {
      "id": "LA",
      "type": "country_code_and_flag",
      "attributes": {
        "name": "Lao People's Democratic Republic",
        "emoji_flag": "🇱🇦",
        "country_code": "856"
      }
    },
    {
      "id": "LV",
      "type": "country_code_and_flag",
      "attributes": {
        "name": "Latvia",
        "emoji_flag": "🇱🇻",
        "country_code": "371"
      }
    },
    {
      "id": "LB",
      "type": "country_code_and_flag",
      "attributes": {
        "name": "Lebanon",
        "emoji_flag": "🇱🇧",
        "country_code": "961"
      }
    },
    {
      "id": "LS",
      "type": "country_code_and_flag",
      "attributes": {
        "name": "Lesotho",
        "emoji_flag": "🇱🇸",
        "country_code": "266"
      }
    },
    {
      "id": "LR",
      "type": "country_code_and_flag",
      "attributes": {
        "name": "Liberia",
        "emoji_flag": "🇱🇷",
        "country_code": "231"
      }
    },
    {
      "id": "LY",
      "type": "country_code_and_flag",
      "attributes": {
        "name": "Libya",
        "emoji_flag": "🇱🇾",
        "country_code": "218"
      }
    },
    {
      "id": "LI",
      "type": "country_code_and_flag",
      "attributes": {
        "name": "Liechtenstein",
        "emoji_flag": "🇱🇮",
        "country_code": "423"
      }
    },
    {
      "id": "LT",
      "type": "country_code_and_flag",
      "attributes": {
        "name": "Lithuania",
        "emoji_flag": "🇱🇹",
        "country_code": "370"
      }
    },
    {
      "id": "LU",
      "type": "country_code_and_flag",
      "attributes": {
        "name": "Luxembourg",
        "emoji_flag": "🇱🇺",
        "country_code": "352"
      }
    },
    {
      "id": "MO",
      "type": "country_code_and_flag",
      "attributes": {
        "name": "Macao",
        "emoji_flag": "🇲🇴",
        "country_code": "853"
      }
    },
    {
      "id": "MG",
      "type": "country_code_and_flag",
      "attributes": {
        "name": "Madagascar",
        "emoji_flag": "🇲🇬",
        "country_code": "261"
      }
    },
    {
      "id": "MW",
      "type": "country_code_and_flag",
      "attributes": {
        "name": "Malawi",
        "emoji_flag": "🇲🇼",
        "country_code": "265"
      }
    },
    {
      "id": "MY",
      "type": "country_code_and_flag",
      "attributes": {
        "name": "Malaysia",
        "emoji_flag": "🇲🇾",
        "country_code": "60"
      }
    },
    {
      "id": "MV",
      "type": "country_code_and_flag",
      "attributes": {
        "name": "Maldives",
        "emoji_flag": "🇲🇻",
        "country_code": "960"
      }
    },
    {
      "id": "ML",
      "type": "country_code_and_flag",
      "attributes": {
        "name": "Mali",
        "emoji_flag": "🇲🇱",
        "country_code": "223"
      }
    },
    {
      "id": "MT",
      "type": "country_code_and_flag",
      "attributes": {
        "name": "Malta",
        "emoji_flag": "🇲🇹",
        "country_code": "356"
      }
    },
    {
      "id": "MH",
      "type": "country_code_and_flag",
      "attributes": {
        "name": "Marshall Islands",
        "emoji_flag": "🇲🇭",
        "country_code": "692"
      }
    },
    {
      "id": "MQ",
      "type": "country_code_and_flag",
      "attributes": {
        "name": "Martinique",
        "emoji_flag": "🇲🇶",
        "country_code": "596"
      }
    },
    {
      "id": "MR",
      "type": "country_code_and_flag",
      "attributes": {
        "name": "Mauritania",
        "emoji_flag": "🇲🇷",
        "country_code": "222"
      }
    },
    {
      "id": "MU",
      "type": "country_code_and_flag",
      "attributes": {
        "name": "Mauritius",
        "emoji_flag": "🇲🇺",
        "country_code": "230"
      }
    },
    {
      "id": "YT",
      "type": "country_code_and_flag",
      "attributes": {
        "name": "Mayotte",
        "emoji_flag": "🇾🇹",
        "country_code": "262"
      }
    },
    {
      "id": "MX",
      "type": "country_code_and_flag",
      "attributes": {
        "name": "Mexico",
        "emoji_flag": "🇲🇽",
        "country_code": "52"
      }
    },
    {
      "id": "FM",
      "type": "country_code_and_flag",
      "attributes": {
        "name": "Micronesia (Federated States of)",
        "emoji_flag": "🇫🇲",
        "country_code": "691"
      }
    },
    {
      "id": "MD",
      "type": "country_code_and_flag",
      "attributes": {
        "name": "Moldova (Republic of)",
        "emoji_flag": "🇲🇩",
        "country_code": "373"
      }
    },
    {
      "id": "MC",
      "type": "country_code_and_flag",
      "attributes": {
        "name": "Monaco",
        "emoji_flag": "🇲🇨",
        "country_code": "377"
      }
    },
    {
      "id": "MN",
      "type": "country_code_and_flag",
      "attributes": {
        "name": "Mongolia",
        "emoji_flag": "🇲🇳",
        "country_code": "976"
      }
    },
    {
      "id": "ME",
      "type": "country_code_and_flag",
      "attributes": {
        "name": "Montenegro",
        "emoji_flag": "🇲🇪",
        "country_code": "382"
      }
    },
    {
      "id": "MS",
      "type": "country_code_and_flag",
      "attributes": {
        "name": "Montserrat",
        "emoji_flag": "🇲🇸",
        "country_code": "1664"
      }
    },
    {
      "id": "MA",
      "type": "country_code_and_flag",
      "attributes": {
        "name": "Morocco",
        "emoji_flag": "🇲🇦",
        "country_code": "212"
      }
    },
    {
      "id": "MZ",
      "type": "country_code_and_flag",
      "attributes": {
        "name": "Mozambique",
        "emoji_flag": "🇲🇿",
        "country_code": "258"
      }
    },
    {
      "id": "MM",
      "type": "country_code_and_flag",
      "attributes": {
        "name": "Myanmar",
        "emoji_flag": "🇲🇲",
        "country_code": "95"
      }
    },
    {
      "id": "NA",
      "type": "country_code_and_flag",
      "attributes": {
        "name": "Namibia",
        "emoji_flag": "🇳🇦",
        "country_code": "264"
      }
    },
    {
      "id": "NR",
      "type": "country_code_and_flag",
      "attributes": {
        "name": "Nauru",
        "emoji_flag": "🇳🇷",
        "country_code": "674"
      }
    },
    {
      "id": "NP",
      "type": "country_code_and_flag",
      "attributes": {
        "name": "Nepal",
        "emoji_flag": "🇳🇵",
        "country_code": "977"
      }
    },
    {
      "id": "NL",
      "type": "country_code_and_flag",
      "attributes": {
        "name": "Netherlands",
        "emoji_flag": "🇳🇱",
        "country_code": "31"
      }
    },
    {
      "id": "NC",
      "type": "country_code_and_flag",
      "attributes": {
        "name": "New Caledonia",
        "emoji_flag": "🇳🇨",
        "country_code": "687"
      }
    },
    {
      "id": "NZ",
      "type": "country_code_and_flag",
      "attributes": {
        "name": "New Zealand",
        "emoji_flag": "🇳🇿",
        "country_code": "64"
      }
    },
    {
      "id": "NI",
      "type": "country_code_and_flag",
      "attributes": {
        "name": "Nicaragua",
        "emoji_flag": "🇳🇮",
        "country_code": "505"
      }
    },
    {
      "id": "NE",
      "type": "country_code_and_flag",
      "attributes": {
        "name": "Niger",
        "emoji_flag": "🇳🇪",
        "country_code": "227"
      }
    },
    {
      "id": "NG",
      "type": "country_code_and_flag",
      "attributes": {
        "name": "Nigeria",
        "emoji_flag": "🇳🇬",
        "country_code": "234"
      }
    },
    {
      "id": "NU",
      "type": "country_code_and_flag",
      "attributes": {
        "name": "Niue",
        "emoji_flag": "🇳🇺",
        "country_code": "683"
      }
    },
    {
      "id": "NF",
      "type": "country_code_and_flag",
      "attributes": {
        "name": "Norfolk Island",
        "emoji_flag": "🇳🇫",
        "country_code": "672"
      }
    },
    {
      "id": "MK",
      "type": "country_code_and_flag",
      "attributes": {
        "name": "North Macedonia",
        "emoji_flag": "🇲🇰",
        "country_code": "389"
      }
    },
    {
      "id": "MP",
      "type": "country_code_and_flag",
      "attributes": {
        "name": "Northern Mariana Islands",
        "emoji_flag": "🇲🇵",
        "country_code": "1"
      }
    },
    {
      "id": "NO",
      "type": "country_code_and_flag",
      "attributes": {
        "name": "Norway",
        "emoji_flag": "🇳🇴",
        "country_code": "47"
      }
    },
    {
      "id": "OM",
      "type": "country_code_and_flag",
      "attributes": {
        "name": "Oman",
        "emoji_flag": "🇴🇲",
        "country_code": "968"
      }
    },
    {
      "id": "PK",
      "type": "country_code_and_flag",
      "attributes": {
        "name": "Pakistan",
        "emoji_flag": "🇵🇰",
        "country_code": "92"
      }
    },
    {
      "id": "PW",
      "type": "country_code_and_flag",
      "attributes": {
        "name": "Palau",
        "emoji_flag": "🇵🇼",
        "country_code": "680"
      }
    },
    {
      "id": "PS",
      "type": "country_code_and_flag",
      "attributes": {
        "name": "Palestine, State of",
        "emoji_flag": "🇵🇸",
        "country_code": "970"
      }
    },
    {
      "id": "PA",
      "type": "country_code_and_flag",
      "attributes": {
        "name": "Panama",
        "emoji_flag": "🇵🇦",
        "country_code": "507"
      }
    },
    {
      "id": "PG",
      "type": "country_code_and_flag",
      "attributes": {
        "name": "Papua New Guinea",
        "emoji_flag": "🇵🇬",
        "country_code": "675"
      }
    },
    {
      "id": "PY",
      "type": "country_code_and_flag",
      "attributes": {
        "name": "Paraguay",
        "emoji_flag": "🇵🇾",
        "country_code": "595"
      }
    },
    {
      "id": "PE",
      "type": "country_code_and_flag",
      "attributes": {
        "name": "Peru",
        "emoji_flag": "🇵🇪",
        "country_code": "51"
      }
    },
    {
      "id": "PH",
      "type": "country_code_and_flag",
      "attributes": {
        "name": "Philippines",
        "emoji_flag": "🇵🇭",
        "country_code": "63"
      }
    },
    {
      "id": "PN",
      "type": "country_code_and_flag",
      "attributes": {
        "name": "Pitcairn",
        "emoji_flag": "🇵🇳",
        "country_code": "64"
      }
    },
    {
      "id": "PL",
      "type": "country_code_and_flag",
      "attributes": {
        "name": "Poland",
        "emoji_flag": "🇵🇱",
        "country_code": "48"
      }
    },
    {
      "id": "PT",
      "type": "country_code_and_flag",
      "attributes": {
        "name": "Portugal",
        "emoji_flag": "🇵🇹",
        "country_code": "351"
      }
    },
    {
      "id": "PR",
      "type": "country_code_and_flag",
      "attributes": {
        "name": "Puerto Rico",
        "emoji_flag": "🇵🇷",
        "country_code": "1"
      }
    },
    {
      "id": "QA",
      "type": "country_code_and_flag",
      "attributes": {
        "name": "Qatar",
        "emoji_flag": "🇶🇦",
        "country_code": "974"
      }
    },
    {
      "id": "RO",
      "type": "country_code_and_flag",
      "attributes": {
        "name": "Romania",
        "emoji_flag": "🇷🇴",
        "country_code": "40"
      }
    },
    {
      "id": "RU",
      "type": "country_code_and_flag",
      "attributes": {
        "name": "Russian Federation",
        "emoji_flag": "🇷🇺",
        "country_code": "7"
      }
    },
    {
      "id": "RW",
      "type": "country_code_and_flag",
      "attributes": {
        "name": "Rwanda",
        "emoji_flag": "🇷🇼",
        "country_code": "250"
      }
    },
    {
      "id": "RE",
      "type": "country_code_and_flag",
      "attributes": {
        "name": "Réunion",
        "emoji_flag": "🇷🇪",
        "country_code": "262"
      }
    },
    {
      "id": "BL",
      "type": "country_code_and_flag",
      "attributes": {
        "name": "Saint Barthélemy",
        "emoji_flag": "🇧🇱",
        "country_code": "590"
      }
    },
    {
      "id": "SH",
      "type": "country_code_and_flag",
      "attributes": {
        "name": "Saint Helena, Ascension and Tristan da Cunha",
        "emoji_flag": "🇸🇭",
        "country_code": "290"
      }
    },
    {
      "id": "KN",
      "type": "country_code_and_flag",
      "attributes": {
        "name": "Saint Kitts and Nevis",
        "emoji_flag": "🇰🇳",
        "country_code": "1869"
      }
    },
    {
      "id": "LC",
      "type": "country_code_and_flag",
      "attributes": {
        "name": "Saint Lucia",
        "emoji_flag": "🇱🇨",
        "country_code": "1758"
      }
    },
    {
      "id": "MF",
      "type": "country_code_and_flag",
      "attributes": {
        "name": "Saint Martin (French part)",
        "emoji_flag": "🇲🇫",
        "country_code": "590"
      }
    },
    {
      "id": "PM",
      "type": "country_code_and_flag",
      "attributes": {
        "name": "Saint Pierre and Miquelon",
        "emoji_flag": "🇵🇲",
        "country_code": "508"
      }
    },
    {
      "id": "VC",
      "type": "country_code_and_flag",
      "attributes": {
        "name": "Saint Vincent and the Grenadines",
        "emoji_flag": "🇻🇨",
        "country_code": "1784"
      }
    },
    {
      "id": "WS",
      "type": "country_code_and_flag",
      "attributes": {
        "name": "Samoa",
        "emoji_flag": "🇼🇸",
        "country_code": "685"
      }
    },
    {
      "id": "SM",
      "type": "country_code_and_flag",
      "attributes": {
        "name": "San Marino",
        "emoji_flag": "🇸🇲",
        "country_code": "378"
      }
    },
    {
      "id": "ST",
      "type": "country_code_and_flag",
      "attributes": {
        "name": "Sao Tome and Principe",
        "emoji_flag": "🇸🇹",
        "country_code": "239"
      }
    },
    {
      "id": "SA",
      "type": "country_code_and_flag",
      "attributes": {
        "name": "Saudi Arabia",
        "emoji_flag": "🇸🇦",
        "country_code": "966"
      }
    },
    {
      "id": "SN",
      "type": "country_code_and_flag",
      "attributes": {
        "name": "Senegal",
        "emoji_flag": "🇸🇳",
        "country_code": "221"
      }
    },
    {
      "id": "RS",
      "type": "country_code_and_flag",
      "attributes": {
        "name": "Serbia",
        "emoji_flag": "🇷🇸",
        "country_code": "381"
      }
    },
    {
      "id": "SC",
      "type": "country_code_and_flag",
      "attributes": {
        "name": "Seychelles",
        "emoji_flag": "🇸🇨",
        "country_code": "248"
      }
    },
    {
      "id": "SL",
      "type": "country_code_and_flag",
      "attributes": {
        "name": "Sierra Leone",
        "emoji_flag": "🇸🇱",
        "country_code": "232"
      }
    },
    {
      "id": "SG",
      "type": "country_code_and_flag",
      "attributes": {
        "name": "Singapore",
        "emoji_flag": "🇸🇬",
        "country_code": "65"
      }
    },
    {
      "id": "SX",
      "type": "country_code_and_flag",
      "attributes": {
        "name": "Sint Maarten (Dutch part)",
        "emoji_flag": "🇸🇽",
        "country_code": "1721"
      }
    },
    {
      "id": "SK",
      "type": "country_code_and_flag",
      "attributes": {
        "name": "Slovakia",
        "emoji_flag": "🇸🇰",
        "country_code": "421"
      }
    },
    {
      "id": "SI",
      "type": "country_code_and_flag",
      "attributes": {
        "name": "Slovenia",
        "emoji_flag": "🇸🇮",
        "country_code": "386"
      }
    },
    {
      "id": "SB",
      "type": "country_code_and_flag",
      "attributes": {
        "name": "Solomon Islands",
        "emoji_flag": "🇸🇧",
        "country_code": "677"
      }
    },
    {
      "id": "SO",
      "type": "country_code_and_flag",
      "attributes": {
        "name": "Somalia",
        "emoji_flag": "🇸🇴",
        "country_code": "252"
      }
    },
    {
      "id": "ZA",
      "type": "country_code_and_flag",
      "attributes": {
        "name": "South Africa",
        "emoji_flag": "🇿🇦",
        "country_code": "27"
      }
    },
    {
      "id": "GS",
      "type": "country_code_and_flag",
      "attributes": {
        "name": "South Georgia and the South Sandwich Islands",
        "emoji_flag": "🇬🇸",
        "country_code": "500"
      }
    },
    {
      "id": "SS",
      "type": "country_code_and_flag",
      "attributes": {
        "name": "South Sudan",
        "emoji_flag": "🇸🇸",
        "country_code": "211"
      }
    },
    {
      "id": "ES",
      "type": "country_code_and_flag",
      "attributes": {
        "name": "Spain",
        "emoji_flag": "🇪🇸",
        "country_code": "34"
      }
    },
    {
      "id": "LK",
      "type": "country_code_and_flag",
      "attributes": {
        "name": "Sri Lanka",
        "emoji_flag": "🇱🇰",
        "country_code": "94"
      }
    },
    {
      "id": "SD",
      "type": "country_code_and_flag",
      "attributes": {
        "name": "Sudan",
        "emoji_flag": "🇸🇩",
        "country_code": "249"
      }
    },
    {
      "id": "SR",
      "type": "country_code_and_flag",
      "attributes": {
        "name": "Suriname",
        "emoji_flag": "🇸🇷",
        "country_code": "597"
      }
    },
    {
      "id": "SJ",
      "type": "country_code_and_flag",
      "attributes": {
        "name": "Svalbard and Jan Mayen",
        "emoji_flag": "🇸🇯",
        "country_code": "47"
      }
    },
    {
      "id": "SE",
      "type": "country_code_and_flag",
      "attributes": {
        "name": "Sweden",
        "emoji_flag": "🇸🇪",
        "country_code": "46"
      }
    },
    {
      "id": "CH",
      "type": "country_code_and_flag",
      "attributes": {
        "name": "Switzerland",
        "emoji_flag": "🇨🇭",
        "country_code": "41"
      }
    },
    {
      "id": "SY",
      "type": "country_code_and_flag",
      "attributes": {
        "name": "Syrian Arab Republic",
        "emoji_flag": "🇸🇾",
        "country_code": "963"
      }
    },
    {
      "id": "TW",
      "type": "country_code_and_flag",
      "attributes": {
        "name": "Taiwan, Province of China",
        "emoji_flag": "🇹🇼",
        "country_code": "886"
      }
    },
    {
      "id": "TJ",
      "type": "country_code_and_flag",
      "attributes": {
        "name": "Tajikistan",
        "emoji_flag": "🇹🇯",
        "country_code": "992"
      }
    },
    {
      "id": "TZ",
      "type": "country_code_and_flag",
      "attributes": {
        "name": "Tanzania, United Republic of",
        "emoji_flag": "🇹🇿",
        "country_code": "255"
      }
    },
    {
      "id": "TH",
      "type": "country_code_and_flag",
      "attributes": {
        "name": "Thailand",
        "emoji_flag": "🇹🇭",
        "country_code": "66"
      }
    },
    {
      "id": "TL",
      "type": "country_code_and_flag",
      "attributes": {
        "name": "Timor-Leste",
        "emoji_flag": "🇹🇱",
        "country_code": "670"
      }
    },
    {
      "id": "TG",
      "type": "country_code_and_flag",
      "attributes": {
        "name": "Togo",
        "emoji_flag": "🇹🇬",
        "country_code": "228"
      }
    },
    {
      "id": "TK",
      "type": "country_code_and_flag",
      "attributes": {
        "name": "Tokelau",
        "emoji_flag": "🇹🇰",
        "country_code": "690"
      }
    },
    {
      "id": "TO",
      "type": "country_code_and_flag",
      "attributes": {
        "name": "Tonga",
        "emoji_flag": "🇹🇴",
        "country_code": "676"
      }
    },
    {
      "id": "TT",
      "type": "country_code_and_flag",
      "attributes": {
        "name": "Trinidad and Tobago",
        "emoji_flag": "🇹🇹",
        "country_code": "1868"
      }
    },
    {
      "id": "TN",
      "type": "country_code_and_flag",
      "attributes": {
        "name": "Tunisia",
        "emoji_flag": "🇹🇳",
        "country_code": "216"
      }
    },
    {
      "id": "TR",
      "type": "country_code_and_flag",
      "attributes": {
        "name": "Turkey",
        "emoji_flag": "🇹🇷",
        "country_code": "90"
      }
    },
    {
      "id": "TM",
      "type": "country_code_and_flag",
      "attributes": {
        "name": "Turkmenistan",
        "emoji_flag": "🇹🇲",
        "country_code": "993"
      }
    },
    {
      "id": "TC",
      "type": "country_code_and_flag",
      "attributes": {
        "name": "Turks and Caicos Islands",
        "emoji_flag": "🇹🇨",
        "country_code": "1649"
      }
    },
    {
      "id": "TV",
      "type": "country_code_and_flag",
      "attributes": {
        "name": "Tuvalu",
        "emoji_flag": "🇹🇻",
        "country_code": "688"
      }
    },
    {
      "id": "UG",
      "type": "country_code_and_flag",
      "attributes": {
        "name": "Uganda",
        "emoji_flag": "🇺🇬",
        "country_code": "256"
      }
    },
    {
      "id": "UA",
      "type": "country_code_and_flag",
      "attributes": {
        "name": "Ukraine",
        "emoji_flag": "🇺🇦",
        "country_code": "380"
      }
    },
    {
      "id": "AE",
      "type": "country_code_and_flag",
      "attributes": {
        "name": "United Arab Emirates",
        "emoji_flag": "🇦🇪",
        "country_code": "971"
      }
    },
    {
      "id": "GB",
      "type": "country_code_and_flag",
      "attributes": {
        "name": "United Kingdom of Great Britain and Northern Ireland",
        "emoji_flag": "🇬🇧",
        "country_code": "44"
      }
    },
    {
      "id": "UM",
      "type": "country_code_and_flag",
      "attributes": {
        "name": "United States Minor Outlying Islands",
        "emoji_flag": "🇺🇲",
        "country_code": "1"
      }
    },
    {
      "id": "US",
      "type": "country_code_and_flag",
      "attributes": {
        "name": "United States of America",
        "emoji_flag": "🇺🇸",
        "country_code": "1"
      }
    },
    {
      "id": "UY",
      "type": "country_code_and_flag",
      "attributes": {
        "name": "Uruguay",
        "emoji_flag": "🇺🇾",
        "country_code": "598"
      }
    },
    {
      "id": "UZ",
      "type": "country_code_and_flag",
      "attributes": {
        "name": "Uzbekistan",
        "emoji_flag": "🇺🇿",
        "country_code": "998"
      }
    },
    {
      "id": "VU",
      "type": "country_code_and_flag",
      "attributes": {
        "name": "Vanuatu",
        "emoji_flag": "🇻🇺",
        "country_code": "678"
      }
    },
    {
      "id": "VE",
      "type": "country_code_and_flag",
      "attributes": {
        "name": "Venezuela (Bolivarian Republic of)",
        "emoji_flag": "🇻🇪",
        "country_code": "58"
      }
    },
    {
      "id": "VN",
      "type": "country_code_and_flag",
      "attributes": {
        "name": "Viet Nam",
        "emoji_flag": "🇻🇳",
        "country_code": "84"
      }
    },
    {
      "id": "VG",
      "type": "country_code_and_flag",
      "attributes": {
        "name": "Virgin Islands (British)",
        "emoji_flag": "🇻🇬",
        "country_code": "1284"
      }
    },
    {
      "id": "VI",
      "type": "country_code_and_flag",
      "attributes": {
        "name": "Virgin Islands (U.S.)",
        "emoji_flag": "🇻🇮",
        "country_code": "1"
      }
    },
    {
      "id": "WF",
      "type": "country_code_and_flag",
      "attributes": {
        "name": "Wallis and Futuna",
        "emoji_flag": "🇼🇫",
        "country_code": "681"
      }
    },
    {
      "id": "EH",
      "type": "country_code_and_flag",
      "attributes": {
        "name": "Western Sahara",
        "emoji_flag": "🇪🇭",
        "country_code": "212"
      }
    },
    {
      "id": "YE",
      "type": "country_code_and_flag",
      "attributes": {
        "name": "Yemen",
        "emoji_flag": "🇾🇪",
        "country_code": "967"
      }
    },
    {
      "id": "ZM",
      "type": "country_code_and_flag",
      "attributes": {
        "name": "Zambia",
        "emoji_flag": "🇿🇲",
        "country_code": "260"
      }
    },
    {
      "id": "ZW",
      "type": "country_code_and_flag",
      "attributes": {
        "name": "Zimbabwe",
        "emoji_flag": "🇿🇼",
        "country_code": "263"
      }
    },
    {
      "id": "SZ",
      "type": "country_code_and_flag",
      "attributes": {
        "name": "eSwatini",
        "emoji_flag": "🇸🇿",
        "country_code": "268"
      }
    },
    {
      "id": "AX",
      "type": "country_code_and_flag",
      "attributes": {
        "name": "Åland Islands",
        "emoji_flag": "🇦🇽",
        "country_code": "358"
      }
    }
  ];
  const [modalVisible, setModalVisible] = useState(false);
  const [datas, setData] = useState(data)
  const [storecountrycode, setstorecountrycode] = useState("")
  useEffect(() => {
    //   this.setState({
    //     pickerData: this.phone.getPickerData()
    // })
    // console.log("@@@@ this.phone.getPickerData() ===============", this.phone.getPickerData())
    // setData(this.phone.getPickerData())
  }, [])

  onPressFlag = () => {
    console.log("@@@@ onPressFlag =======")
    setModalVisible(true)
    // this.countryPicker.open()
  }

  selectCountry = (country) => {
    console.log("@@@ country ===========", country)
    setstorecountrycode(country)
    setModalVisible(false)
    // this.phone.selectCountry(country.iso2)
  }

  renderData = (item) => {
    console.log("@@@@ item ==========", item.item)
    return (
      <TouchableOpacity onPress={() => selectCountry(item.item.attributes.emoji_flag)}>
        <Text>{item.item.attributes.emoji_flag} {item.item.attributes.country_code} {item.item.attributes.name}</Text>
      </TouchableOpacity>
    )
  }
  return (
    <SafeAreaView style={styles.safearea}>
      <View>
        <Text style={styles.Text}>Enter your Mobile Number </Text>
        <Text style={styles.Text1}>we will share you the verification code</Text>
      </View>

      <View style={styles.container}>
        {/* <PhoneInput
          ref={(ref) => { this.phone = ref; }}
          onPressFlag={this.onPressFlag}
          initialCountry={'us'}
          initialValue="13178675309"
          textProps={{
            placeholder: 'Enter a phone number...'
          }}
        /> */}
        <TouchableOpacity
          style={{
            width: 345,
            height: 50,
            borderColor: "#red",
            borderWidth: 1,
            flexDirection: "row",
            alignItems: "center",
            marginLeft: 15,
            borderRadius: 5,
            marginTop: 50,
            justifyContent: "center"
          }}
          onPress={() => onPressFlag()}>
          <Text style={{ fontSize: 30 }}>{storecountrycode}</Text>
          <View style={{ width: 1, height: 50, backgroundColor: "#000", marginLeft: 30 }} />
          <TextInput style={{ width: 220, marginLeft: 10,}}
            maxLength={10}
          >

          </TextInput>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate(Getotp)}>
          <View style={{
            width: 345, height: 50, backgroundColor: "#FFD65B", marginTop: 200,
            //width: dw/1.15,
            height: 60,
            backgroundColor: "#FFD65B",
            justifyContent: "center",
            borderRadius: 10,
            alignSelf: "center",
          }}>
            <Text style={{ alignSelf: "center", }}>Get otp</Text>
          </View></TouchableOpacity>

      </View>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <FlatList
              data={datas}
              renderItem={(item) => renderData(item)} />
          </View>
        </View>
      </Modal>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safearea: {
    flex: 1,
    //justifyContent: 'center',
    //alignItems: 'center',
    backgroundColor: '#FFFFFF',
  },
  Text: {
    fontWeight: "bold",
    marginTop: 140,
    fontSize: 20,
    marginLeft: 15,
  },
  Text1: {
    //fontWeight: "bold",
    marginTop: 1,
    fontSize: 15,
    color: "#6D6E70",
    marginLeft: 15,

  },
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignSelf: "center"
  },

  modalView: {
    backgroundColor: "#FFFFFF",
    height: 600,
    width: 300,
  }
});

export default ForgotPasswordScreen;
