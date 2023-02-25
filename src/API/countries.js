const countriesObj = [
    {
        "value": "All",
        "text": "Alla Länder"
    },
    {
        "value": "Afghanistan",
        "text": "Afghanistan"
    },
    {
        "value": "Albanien",
        "text": "Albanien"
    },
    {
        "value": "Algeriet",
        "text": "Algeriet"
    },
    {
        "value": "Andorra",
        "text": "Andorra"
    },
    {
        "value": "Angola",
        "text": "Angola"
    },
    {
        "value": "Antigua och Barbuda",
        "text": "Antigua och Barbuda"
    },
    {
        "value": "Argentina",
        "text": "Argentina"
    },
    {
        "value": "Armenien",
        "text": "Armenien"
    },
    {
        "value": "Australien",
        "text": "Australien"
    },
    {
        "value": "Azerbajdzjan",
        "text": "Azerbajdzjan"
    },
    {
        "value": "Bahamas",
        "text": "Bahamas"
    },
    {
        "value": "Bahrain",
        "text": "Bahrain"
    },
    {
        "value": "Bangladesh",
        "text": "Bangladesh"
    },
    {
        "value": "Barbados",
        "text": "Barbados"
    },
    {
        "value": "Belgien",
        "text": "Belgien"
    },
    {
        "value": "Belize",
        "text": "Belize"
    },
    {
        "value": "Benin",
        "text": "Benin"
    },
    {
        "value": "Bhutan",
        "text": "Bhutan"
    },
    {
        "value": "Bolivia",
        "text": "Bolivia"
    },
    {
        "value": "Bosnien Hercegovina",
        "text": "Bosnien Hercegovina"
    },
    {
        "value": "Botswana",
        "text": "Botswana"
    },
    {
        "value": "Brasilien",
        "text": "Brasilien"
    },
    {
        "value": "Brunei",
        "text": "Brunei"
    },
    {
        "value": "Bulgarien",
        "text": "Bulgarien"
    },
    {
        "value": "Burkina Faso",
        "text": "Burkina Faso"
    },
    {
        "value": "Burundi",
        "text": "Burundi"
    },
    {
        "value": "Centralafrikanska republiken",
        "text": "Centralafrikanska republiken"
    },
    {
        "value": "Chile",
        "text": "Chile"
    },
    {
        "value": "Colombia",
        "text": "Colombia"
    },
    {
        "value": "Comorerna",
        "text": "Comorerna"
    },
    {
        "value": "Costa Rica",
        "text": "Costa Rica"
    },
    {
        "value": "Cypern",
        "text": "Cypern"
    },
    {
        "value": "Danmark",
        "text": "Danmark"
    },
    {
        "value": "Demokratiska republiken Kongo",
        "text": "Demokratiska republiken Kongo"
    },
    {
        "value": "Djibouti",
        "text": "Djibouti"
    },
    {
        "value": "Dominica",
        "text": "Dominica"
    },
    {
        "value": "Dominikanska republiken",
        "text": "Dominikanska republiken"
    },
    {
        "value": "Ecuador",
        "text": "Ecuador"
    },
    {
        "value": "Egypten",
        "text": "Egypten"
    },
    {
        "value": "Ekvatorialguinea",
        "text": "Ekvatorialguinea"
    },
    {
        "value": "El Salvador",
        "text": "El Salvador"
    },
    {
        "value": "Elfenbenskusten",
        "text": "Elfenbenskusten"
    },
    {
        "value": "Eritrea",
        "text": "Eritrea"
    },
    {
        "value": "Estland",
        "text": "Estland"
    },
    {
        "value": "Etiopien",
        "text": "Etiopien"
    },
    {
        "value": "Fiji",
        "text": "Fiji"
    },
    {
        "value": "Filippinerna",
        "text": "Filippinerna"
    },
    {
        "value": "Frankrike",
        "text": "Frankrike"
    },
    {
        "value": "Förenade Arabemiraten",
        "text": "Förenade Arabemiraten"
    },
    {
        "value": "Gabon",
        "text": "Gabon"
    },
    {
        "value": "Gambia",
        "text": "Gambia"
    },
    {
        "value": "Georgien",
        "text": "Georgien"
    },
    {
        "value": "Ghana",
        "text": "Ghana"
    },
    {
        "value": "Grekland",
        "text": "Grekland"
    },
    {
        "value": "Grenada",
        "text": "Grenada"
    },
    {
        "value": "Guatemala",
        "text": "Guatemala"
    },
    {
        "value": "Guinea",
        "text": "Guinea"
    },
    {
        "value": "Guinea-Bissau",
        "text": "Guinea-Bissau"
    },
    {
        "value": "Guyana",
        "text": "Guyana"
    },
    {
        "value": "Haiti",
        "text": "Haiti"
    },
    {
        "value": "Honduras",
        "text": "Honduras"
    },
    {
        "value": "Indien",
        "text": "Indien"
    },
    {
        "value": "Indonesien",
        "text": "Indonesien"
    },
    {
        "value": "Irak",
        "text": "Irak"
    },
    {
        "value": "Iran",
        "text": "Iran"
    },
    {
        "value": "Irland",
        "text": "Irland"
    },
    {
        "value": "Island",
        "text": "Island"
    },
    {
        "value": "Israel",
        "text": "Israel"
    },
    {
        "value": "Italien",
        "text": "Italien"
    },
    {
        "value": "Jamaica",
        "text": "Jamaica"
    },
    {
        "value": "Japan",
        "text": "Japan"
    },
    {
        "value": "Jemen",
        "text": "Jemen"
    },
    {
        "value": "Jordanien",
        "text": "Jordanien"
    },
    {
        "value": "Kambodja",
        "text": "Kambodja"
    },
    {
        "value": "Kamerun",
        "text": "Kamerun"
    },
    {
        "value": "Kanada",
        "text": "Kanada"
    },
    {
        "value": "Kap Verde",
        "text": "Kap Verde"
    },
    {
        "value": "Kazakstan",
        "text": "Kazakstan"
    },
    {
        "value": "Kenya",
        "text": "Kenya"
    },
    {
        "value": "Kina",
        "text": "Kina"
    },
    {
        "value": "Kirgizistan",
        "text": "Kirgizistan"
    },
    {
        "value": "Kiribati",
        "text": "Kiribati"
    },
    {
        "value": "Kongo",
        "text": "Kongo"
    },
    {
        "value": "Kosovo",
        "text": "Kosovo"
    },
    {
        "value": "Kroatien",
        "text": "Kroatien"
    },
    {
        "value": "Kuba",
        "text": "Kuba"
    },
    {
        "value": "Kuwait",
        "text": "Kuwait"
    },
    {
        "value": "Laos",
        "text": "Laos"
    },
    {
        "value": "Lesotho",
        "text": "Lesotho"
    },
    {
        "value": "Lettland",
        "text": "Lettland"
    },
    {
        "value": "Libanon",
        "text": "Libanon"
    },
    {
        "value": "Liberia",
        "text": "Liberia"
    },
    {
        "value": "Libyen",
        "text": "Libyen"
    },
    {
        "value": "Liechtenstein",
        "text": "Liechtenstein"
    },
    {
        "value": "Litauen",
        "text": "Litauen"
    },
    {
        "value": "Luxemburg",
        "text": "Luxemburg"
    },
    {
        "value": "Madagaskar",
        "text": "Madagaskar"
    },
    {
        "value": "Makedonien",
        "text": "Makedonien"
    },
    {
        "value": "Malawi",
        "text": "Malawi"
    },
    {
        "value": "Malaysia",
        "text": "Malaysia"
    },
    {
        "value": "Maldiverna",
        "text": "Maldiverna"
    },
    {
        "value": "Mali",
        "text": "Mali"
    },
    {
        "value": "Malta",
        "text": "Malta"
    },
    {
        "value": "Marocko",
        "text": "Marocko"
    },
    {
        "value": "Marshallöarna",
        "text": "Marshallöarna"
    },
    {
        "value": "Mauretanien",
        "text": "Mauretanien"
    },
    {
        "value": "Mauritius",
        "text": "Mauritius"
    },
    {
        "value": "Mexiko",
        "text": "Mexiko"
    },
    {
        "value": "Mikronesien",
        "text": "Mikronesien"
    },
    {
        "value": "Moçambique",
        "text": "Moçambique"
    },
    {
        "value": "Moldavien",
        "text": "Moldavien"
    },
    {
        "value": "Monaco",
        "text": "Monaco"
    },
    {
        "value": "Mongoliet",
        "text": "Mongoliet"
    },
    {
        "value": "Montenegro",
        "text": "Montenegro"
    },
    {
        "value": "Myanmar",
        "text": "Myanmar"
    },
    {
        "value": "Namibia",
        "text": "Namibia"
    },
    {
        "value": "Nauru",
        "text": "Nauru"
    },
    {
        "value": "Nederländerna",
        "text": "Nederländerna"
    },
    {
        "value": "Nepal",
        "text": "Nepal"
    },
    {
        "value": "Nicaragua",
        "text": "Nicaragua"
    },
    {
        "value": "Niger",
        "text": "Niger"
    },
    {
        "value": "Nigeria",
        "text": "Nigeria"
    },
    {
        "value": "Nordkorea",
        "text": "Nordkorea"
    },
    {
        "value": "Norge",
        "text": "Norge"
    },
    {
        "value": "Nya Zeeland",
        "text": "Nya Zeeland"
    },
    {
        "value": "Oman",
        "text": "Oman"
    },
    {
        "value": "Pakistan",
        "text": "Pakistan"
    },
    {
        "value": "Palau",
        "text": "Palau"
    },
    {
        "value": "Palestina",
        "text": "Palestina"
    },
    {
        "value": "Panama",
        "text": "Panama"
    },
    {
        "value": "Papua Nya Guinea",
        "text": "Papua Nya Guinea"
    },
    {
        "value": "Paraguay",
        "text": "Paraguay"
    },
    {
        "value": "Peru",
        "text": "Peru"
    },
    {
        "value": "Polen",
        "text": "Polen"
    },
    {
        "value": "Portugal",
        "text": "Portugal"
    },
    {
        "value": "Qatar",
        "text": "Qatar"
    },
    {
        "value": "Rumänien",
        "text": "Rumänien"
    },
    {
        "value": "Rwanda",
        "text": "Rwanda"
    },
    {
        "value": "Ryssland",
        "text": "Ryssland"
    },
    {
        "value": "Saint Kitts och Nevis",
        "text": "Saint Kitts och Nevis"
    },
    {
        "value": "Saint Lucia",
        "text": "Saint Lucia"
    },
    {
        "value": "Saint Vincent och Grenadinerna",
        "text": "Saint Vincent och Grenadinerna"
    },
    {
        "value": "Salomonöarna",
        "text": "Salomonöarna"
    },
    {
        "value": "Samoa",
        "text": "Samoa"
    },
    {
        "value": "San Marino",
        "text": "San Marino"
    },
    {
        "value": "São Tomé och Principe",
        "text": "São Tomé och Principe"
    },
    {
        "value": "Saudiarabien",
        "text": "Saudiarabien"
    },
    {
        "value": "Schweiz",
        "text": "Schweiz"
    },
    {
        "value": "Senegal",
        "text": "Senegal"
    },
    {
        "value": "Serbien",
        "text": "Serbien"
    },
    {
        "value": "Seychellerna",
        "text": "Seychellerna"
    },
    {
        "value": "Sierra Leone",
        "text": "Sierra Leone"
    },
    {
        "value": "Singapore",
        "text": "Singapore"
    },
    {
        "value": "Slovakien",
        "text": "Slovakien"
    },
    {
        "value": "Slovenien",
        "text": "Slovenien"
    },
    {
        "value": "Somalia",
        "text": "Somalia"
    },
    {
        "value": "Spanien",
        "text": "Spanien"
    },
    {
        "value": "Sri Lanka",
        "text": "Sri Lanka"
    },
    {
        "value": "Storbritannien",
        "text": "Storbritannien"
    },
    {
        "value": "Sudan",
        "text": "Sudan"
    },
    {
        "value": "Surinam",
        "text": "Surinam"
    },
    {
        "value": "Swaziland",
        "text": "Swaziland"
    },
    {
        "value": "Sverige",
        "text": "Sverige"
    },
    {
        "value": "Sydafrika",
        "text": "Sydafrika"
    },
    {
        "value": "Sydkorea",
        "text": "Sydkorea"
    },
    {
        "value": "Sydsudan",
        "text": "Sydsudan"
    },
    {
        "value": "Syrien",
        "text": "Syrien"
    },
    {
        "value": "Tadzjikistan",
        "text": "Tadzjikistan"
    },
    {
        "value": "Taiwan",
        "text": "Taiwan"
    },
    {
        "value": "Tanzania",
        "text": "Tanzania"
    },
    {
        "value": "Tchad",
        "text": "Tchad"
    },
    {
        "value": "Thailand",
        "text": "Thailand"
    },
    {
        "value": "Tjeckien",
        "text": "Tjeckien"
    },
    {
        "value": "Togo",
        "text": "Togo"
    },
    {
        "value": "Tonga",
        "text": "Tonga"
    },
    {
        "value": "Trinidad och Tobago",
        "text": "Trinidad och Tobago"
    },
    {
        "value": "Tunisien",
        "text": "Tunisien"
    },
    {
        "value": "Turkiet",
        "text": "Turkiet"
    },
    {
        "value": "Turkmenistan",
        "text": "Turkmenistan"
    },
    {
        "value": "Tuvalu",
        "text": "Tuvalu"
    },
    {
        "value": "Tyskland",
        "text": "Tyskland"
    },
    {
        "value": "Uganda",
        "text": "Uganda"
    },
    {
        "value": "Ukraina",
        "text": "Ukraina"
    },
    {
        "value": "Ungern",
        "text": "Ungern"
    },
    {
        "value": "Uruguay",
        "text": "Uruguay"
    },
    {
        "value": "USA",
        "text": "USA"
    },
    {
        "value": "Uzbekistan",
        "text": "Uzbekistan"
    },
    {
        "value": "Vanuatu",
        "text": "Vanuatu"
    },
    {
        "value": "Vatikanen",
        "text": "Vatikanen"
    },
    {
        "value": "Venezuela",
        "text": "Venezuela"
    },
    {
        "value": "Vietnam",
        "text": "Vietnam"
    },
    {
        "value": "Vitryssland",
        "text": "Vitryssland"
    },
    {
        "value": "Zambia",
        "text": "Zambia"
    },
    {
        "value": "Zimbabwe",
        "text": "Zimbabwe"
    },
    {
        "value": "Österrike",
        "text": "Österrike"
    },
    {
        "value": "Östtimor",
        "text": "Östtimor"
    }
]

export default countriesObj
