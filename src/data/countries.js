import za from './maps/za.png';
import ke from './maps/ke.png';
import tn from './maps/tn.png';
import jp from './maps/jp.png';
import ind from './maps/in.png';
import sk from './maps/sk.png';
import fr from './maps/fr.png';
import gb from './maps/gb.png';
import ae from './maps/ae.png';
import us from './maps/us.png';
import mx from './maps/mx.png';
import ca from './maps/ca.png';
import au from './maps/au.png';
import nz from './maps/nz.png';
import ws from './maps/ws.png';
import cl from './maps/cl.png';
import br from './maps/br.png';
import ar from './maps/ar.png';

const countries = [
  {
    region: 'africa',
    name: 'South Africa',
    map: za,
    cities: [
      {
        name: 'Cape Town',
        lat: '-33.924870',
        long: '18.424055',
      },
      {
        name: 'Johannesburg',
        lat: '-26.204103',
        long: '28.047304',
      },
      {
        name: 'Bloemfontein',
        lat: '-29.085215',
        long: '26.159576',
      },
    ],
  },
  {
    region: 'africa',
    name: 'Tunisia',
    map: tn,
    cities: [
      {
        name: 'Tunis',
        lat: '33.8439408',
        long: '9.400138',
      },
      {
        name: 'Sousse',
        lat: '35.8288175',
        long: '10.6405392',
      },
      {
        name: 'Sfax',
        lat: '34.7232387',
        long: '10.3358474',
      },
    ],
  },
  {
    region: 'africa',
    name: 'Kenya',
    map: ke,
    cities: [
      {
        name: 'Nairobi',
        lat: '-1.3031689',
        long: '36.8260612',
      },
      {
        name: 'Mombasa',
        lat: '-4.05052',
        long: '-4.05052',
      },
      {
        name: 'Eldoret',
        lat: '0.5198329',
        long: '35.2715481',
      },
    ],
  },
  {
    region: 'asia',
    name: 'Japan',
    map: jp,
    cities: [
      {
        name: 'Tokyo',
        lat: '35.6828387',
        long: '139.7594549',
      },
      {
        name: 'Kyoto',
        lat: '35.021041',
        long: '135.7556075',
      },
      {
        name: 'Sapporo',
        lat: '43.061936',
        long: '141.3542924',
      },
    ],
  },
  {
    region: 'asia',
    name: 'India',
    map: ind,
    cities: [
      {
        name: 'Kullu',
        lat: '31.958590444312378',
        long: '77.11895047564697',
      },
      {
        name: 'Mumbai',
        lat: '19.0785451',
        long: '72.878176',
      },
      {
        name: 'Manali',
        lat: '32.263094',
        long: '77.1881218',
      },
    ],
  },
  {
    region: 'asia',
    name: 'United Arab Emirates',
    map: ae,
    cities: [
      {
        name: 'Dubai',
        lat: '25.2653471',
        long: '55.2924914',
      },
      {
        name: 'Abu Dhabi',
        lat: '24.4538352',
        long: '54.3774014',
      },
      {
        name: 'Sharjah',
        lat: '25.3575436',
        long: '55.3882729',
      },
    ],
  },
  {
    region: 'europe',
    name: 'Slovakia',
    map: sk,
    cities: [
      {
        name: 'Bratislava',
        lat: '48.1435149',
        long: '17.108279',
      },
      {
        name: 'Košice',
        lat: '48.7172272',
        long: '21.2496774',
      },
      {
        name: 'Banská Bystrica',
        lat: '48.7384028',
        long: '19.1573494',
      },
    ],
  },
  {
    region: 'europe',
    name: 'France',
    map: fr,
    cities: [
      {
        name: 'Paris',
        lat: '48.8588897',
        long: '2.320041',
      },
      {
        name: 'Marseille',
        lat: '43.2961743',
        long: '5.3699525',
      },
      {
        name: 'Lyon',
        lat: '45.7578137',
        long: '4.8320114',
      },
    ],
  },
  {
    region: 'europe',
    name: 'United Kingdom',
    map: gb,
    cities: [
      {
        name: 'London',
        lat: '51.50334548950195',
        long: '-0.07939650118350983',
      },
      {
        name: 'Birmingham',
        lat: '52.4796992',
        long: '-1.9026911',
      },
      {
        name: 'Edinburgh',
        lat: '55.9533456',
        long: '-3.1883749',
      },
    ],
  },
  {
    region: 'north-america',
    name: 'United States of America',
    map: us,
    cities: [
      {
        name: 'New York',
        lat: '40.7127281',
        long: '-74.0060152',
      },
      {
        name: 'Seattle',
        lat: '47.6038321',
        long: '-122.330062',
      },
      {
        name: 'Denver',
        lat: '39.7392364',
        long: '-104.984862',
      },
    ],
  },
  {
    region: 'north-america',
    name: 'Mexico',
    map: mx,
    cities: [
      {
        name: 'Mexico City',
        lat: '19.4326296',
        long: '-99.1331785',
      },
      {
        name: 'Guadalajara',
        lat: '20.6720375',
        long: '-98',
      },
      {
        name: 'Puebla',
        lat: '18.833333',
        long: '-104.984862',
      },
    ],
  },
  {
    region: 'north-america',
    name: 'Canada',
    map: ca,
    cities: [
      {
        name: 'Toronto',
        lat: '43.6534817',
        long: '-79.3839347',
      },
      {
        name: 'Vancouver',
        lat: '49.2608724',
        long: '-123.113952',
      },
      {
        name: 'Calgary',
        lat: '51.0460954',
        long: '-114.065465',
      },
    ],
  },
  {
    region: 'oceania',
    name: 'Australia',
    map: au,
    cities: [
      {
        name: 'Sydney',
        lat: '-33.8698439',
        long: '151.2082848',
      },
      {
        name: 'Melbourne',
        lat: '-37.8142176',
        long: '144.9631608',
      },
      {
        name: 'Perth',
        lat: '-31.9558964',
        long: '115.8605801',
      },
    ],
  },
  {
    region: 'oceania',
    name: 'New Zealand',
    map: nz,
    cities: [
      {
        name: 'Auckland',
        lat: '-36.852095',
        long: '174.7631803',
      },
      {
        name: 'Wellington',
        lat: '-41.2887953',
        long: '174.7772114',
      },
      {
        name: 'Christchurch',
        lat: '-43.530955',
        long: '172.6366455',
      },
    ],
  },
  {
    region: 'oceania',
    name: 'samoa',
    map: ws,
    cities: [
      {
        name: 'Apia',
        lat: '-13.8343691',
        long: '-171.7692793',
      },
      {
        name: 'Mulifanua',
        lat: '-13.8462996',
        long: '-172.0486234',
      },
      {
        name: 'Vailele',
        lat: '-13.8471921',
        long: '-171.7262676',
      },
    ],
  },
  {
    region: 'south-america',
    name: 'Brazil',
    map: br,
    cities: [
      {
        name: 'Rio de Janeiro',
        lat: '-22.9110137',
        long: '-43.2093727',
      },
      {
        name: 'São Paulo',
        lat: '-23.5506507',
        long: '-46.6333824',
      },
      {
        name: 'Salvador, Bahia',
        lat: '-12.9822499',
        long: '-38.4812772',
      },
    ],
  },
  {
    region: 'south-america',
    name: 'Argentina',
    map: ar,
    cities: [
      {
        name: 'Buenos Aires',
        lat: '-34.6075682',
        long: '-58.4370894',
      },
      {
        name: 'Cordoba',
        lat: '-31.4173391',
        long: '-64.183319',
      },
      {
        name: 'Rosario',
        lat: '-32.9595004',
        long: '-60.6615415',
      },
    ],
  },
  {
    region: 'south-america',
    name: 'Chile',
    map: cl,
    cities: [
      {
        name: 'Santiago',
        lat: '-33.4377756',
        long: '-70.6504502',
      },
      {
        name: 'Viña del Mar',
        lat: '-33.0244535',
        long: '-71.5517636',
      },
      {
        name: 'Valparaíso',
        lat: '-33.0458456',
        long: '-71.6196749',
      },
    ],
  },
];

export default countries;
