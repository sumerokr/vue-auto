<template>
  <div class="p-4">
    <h1 class="flex justify-between items-center text-3xl mb-8">
      <span>Cars</span>
      <span class="material-icons opacity-60" @click="changeVariant"
        >view_list</span
      >
    </h1>

    <ul class="flex space-x-4 mb-8">
      <li class="flex-1">
        <button
          class="border-2 border-gray-200 px-4 py-2 rounded w-full text-opacity-90 font-medium text-left"
          type="button"
        >
          <i class="material-icons align-top mr-3">filter_list</i>
          Filter
        </button>
      </li>
      <li class="flex-1">
        <button
          class="border-2 border-gray-200 px-4 py-2 rounded w-full text-opacity-90 font-medium text-left"
          type="button"
        >
          <i class="material-icons align-top mr-3">sort</i>
          Sort
        </button>
      </li>
    </ul>

    <ul class="space-y-4">
      <component
        :is="currentVariant"
        v-for="car in cars"
        :key="car.id"
        :car="car"
      />
    </ul>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import CarListItemOne from "@/components/car-list-items/CarListItemOne.vue";
import CarListItemTwo from "@/components/car-list-items/CarListItemTwo.vue";
import CarListItemThree from "@/components/car-list-items/CarListItemThree.vue";

export default defineComponent({
  name: "Cars",

  components: {
    CarListItemOne,
    CarListItemTwo,
    CarListItemThree,
  },

  setup: () => {
    const cars = ref([
      {
        brand: "Hyundai",
        model: "Altima",
        type: "SUV",
        fuel: "Hybrid",
        color: "blue",
        image: "https://via.placeholder.com/320x240.webp/026134/102d56",
        images: [
          {
            "320": "https://via.placeholder.com/320x240.webp/762542/1a5a13",
            "640": "https://via.placeholder.com/640x480.webp/65511d/1e610c",
            "960": "https://via.placeholder.com/960x720.webp/034519/7a1c4b",
            "1280": "https://via.placeholder.com/1280x960.webp/6d4c68/0c1580",
            "1600": "https://via.placeholder.com/1600x1200.webp/157b35/455916",
            "1920": "https://via.placeholder.com/1920x1440.webp/401532/4f6265",
          },
          {
            "320": "https://via.placeholder.com/320x240.webp/766235/6f6545",
            "640": "https://via.placeholder.com/640x480.webp/35633b/7b1c05",
            "960": "https://via.placeholder.com/960x720.webp/0b7e6d/693521",
            "1280": "https://via.placeholder.com/1280x960.webp/791b65/0d6b74",
            "1600": "https://via.placeholder.com/1600x1200.webp/3a1043/647d16",
            "1920": "https://via.placeholder.com/1920x1440.webp/2c7369/803849",
          },
          {
            "320": "https://via.placeholder.com/320x240.webp/7e6e28/194825",
            "640": "https://via.placeholder.com/640x480.webp/0f2f22/241b1f",
            "960": "https://via.placeholder.com/960x720.webp/58260e/042c02",
            "1280": "https://via.placeholder.com/1280x960.webp/0a217c/17422a",
            "1600": "https://via.placeholder.com/1600x1200.webp/4f0608/480254",
            "1920": "https://via.placeholder.com/1920x1440.webp/63223e/0b3b09",
          },
          {
            "320": "https://via.placeholder.com/320x240.webp/772b56/470d63",
            "640": "https://via.placeholder.com/640x480.webp/67187f/787725",
            "960": "https://via.placeholder.com/960x720.webp/2b7c78/591f29",
            "1280": "https://via.placeholder.com/1280x960.webp/232333/705c61",
            "1600": "https://via.placeholder.com/1600x1200.webp/463737/5f3570",
            "1920": "https://via.placeholder.com/1920x1440.webp/2c5607/300257",
          },
          {
            "320": "https://via.placeholder.com/320x240.webp/5d4207/0a6867",
            "640": "https://via.placeholder.com/640x480.webp/80400b/2f181f",
            "960": "https://via.placeholder.com/960x720.webp/5f4754/103e07",
            "1280": "https://via.placeholder.com/1280x960.webp/0c2622/1c5c6f",
            "1600": "https://via.placeholder.com/1600x1200.webp/242803/337178",
            "1920": "https://via.placeholder.com/1920x1440.webp/7b3406/476a07",
          },
        ],
        mileage: 12790,
        gearbox: "Automatic",
        year: 2013,
        price: 43464,
        city: "North Rodbury",
        registeredTill: "2021-07-19T09:51:10.210Z",
        drivetrain: "FWD",
      },
      {
        brand: "Mercedes Benz",
        model: "Land Cruiser",
        type: "Extended Cab Pickup",
        fuel: "Hybrid",
        color: "ivory",
        image: "https://via.placeholder.com/320x240.webp/680d69/536629",
        images: [
          {
            "320": "https://via.placeholder.com/320x240.webp/6b591d/581b4b",
            "640": "https://via.placeholder.com/640x480.webp/4a792b/553a13",
            "960": "https://via.placeholder.com/960x720.webp/0d3735/0f237d",
            "1280": "https://via.placeholder.com/1280x960.webp/7e6c6f/48314d",
            "1600": "https://via.placeholder.com/1600x1200.webp/6b0a2f/7a5242",
            "1920": "https://via.placeholder.com/1920x1440.webp/742361/083c7b",
          },
          {
            "320": "https://via.placeholder.com/320x240.webp/160609/18150e",
            "640": "https://via.placeholder.com/640x480.webp/250101/3c336c",
            "960": "https://via.placeholder.com/960x720.webp/7d2a29/57545a",
            "1280": "https://via.placeholder.com/1280x960.webp/7d225f/3e0e08",
            "1600": "https://via.placeholder.com/1600x1200.webp/5f0d4a/460658",
            "1920": "https://via.placeholder.com/1920x1440.webp/65640e/001a74",
          },
          {
            "320": "https://via.placeholder.com/320x240.webp/4a5741/1f125e",
            "640": "https://via.placeholder.com/640x480.webp/7d531b/4f2721",
            "960": "https://via.placeholder.com/960x720.webp/742923/004050",
            "1280": "https://via.placeholder.com/1280x960.webp/35412e/051f67",
            "1600": "https://via.placeholder.com/1600x1200.webp/6a3107/343724",
            "1920": "https://via.placeholder.com/1920x1440.webp/3e4c68/3f1626",
          },
          {
            "320": "https://via.placeholder.com/320x240.webp/7b3c27/622d29",
            "640": "https://via.placeholder.com/640x480.webp/0a2f7c/75126c",
            "960": "https://via.placeholder.com/960x720.webp/3c5e02/251d64",
            "1280": "https://via.placeholder.com/1280x960.webp/052c71/652f19",
            "1600": "https://via.placeholder.com/1600x1200.webp/087e07/486e79",
            "1920": "https://via.placeholder.com/1920x1440.webp/042569/525f58",
          },
          {
            "320": "https://via.placeholder.com/320x240.webp/766f19/12080c",
            "640": "https://via.placeholder.com/640x480.webp/236b06/690e5a",
            "960": "https://via.placeholder.com/960x720.webp/34335a/662a4c",
            "1280": "https://via.placeholder.com/1280x960.webp/28737b/372104",
            "1600": "https://via.placeholder.com/1600x1200.webp/3b2b43/635275",
            "1920": "https://via.placeholder.com/1920x1440.webp/392f4d/010259",
          },
        ],
        mileage: 105358,
        gearbox: "Automatic",
        year: 1994,
        price: 19324,
        city: "Gregview",
        registeredTill: "2021-07-02T23:18:56.168Z",
        drivetrain: "FWD",
      },
      {
        brand: "Audi",
        model: "PT Cruiser",
        type: "Convertible",
        fuel: "Electric",
        color: "blue",
        image: "https://via.placeholder.com/320x240.webp/714235/336c76",
        images: [
          {
            "320": "https://via.placeholder.com/320x240.webp/1a081b/6c1b5e",
            "640": "https://via.placeholder.com/640x480.webp/7c162b/795c50",
            "960": "https://via.placeholder.com/960x720.webp/390a34/243502",
            "1280": "https://via.placeholder.com/1280x960.webp/1f624f/097a7b",
            "1600": "https://via.placeholder.com/1600x1200.webp/6a5840/0f2c0e",
            "1920": "https://via.placeholder.com/1920x1440.webp/233d5e/1f0c52",
          },
          {
            "320": "https://via.placeholder.com/320x240.webp/39674b/357b25",
            "640": "https://via.placeholder.com/640x480.webp/470171/772967",
            "960": "https://via.placeholder.com/960x720.webp/2f424a/125168",
            "1280": "https://via.placeholder.com/1280x960.webp/545475/0e035f",
            "1600": "https://via.placeholder.com/1600x1200.webp/247d1c/450640",
            "1920": "https://via.placeholder.com/1920x1440.webp/5a434a/3c401f",
          },
          {
            "320": "https://via.placeholder.com/320x240.webp/63055e/15402a",
            "640": "https://via.placeholder.com/640x480.webp/3f495e/77683e",
            "960": "https://via.placeholder.com/960x720.webp/067623/512963",
            "1280": "https://via.placeholder.com/1280x960.webp/234353/0b7428",
            "1600": "https://via.placeholder.com/1600x1200.webp/105a42/6a7905",
            "1920": "https://via.placeholder.com/1920x1440.webp/4a180c/175c58",
          },
          {
            "320": "https://via.placeholder.com/320x240.webp/481751/0d3a0d",
            "640": "https://via.placeholder.com/640x480.webp/427946/0d6f65",
            "960": "https://via.placeholder.com/960x720.webp/4d093a/234a55",
            "1280": "https://via.placeholder.com/1280x960.webp/491612/15632f",
            "1600": "https://via.placeholder.com/1600x1200.webp/5a046b/206979",
            "1920": "https://via.placeholder.com/1920x1440.webp/54651e/647780",
          },
          {
            "320": "https://via.placeholder.com/320x240.webp/23173b/673c42",
            "640": "https://via.placeholder.com/640x480.webp/54407e/3e196d",
            "960": "https://via.placeholder.com/960x720.webp/486407/151a63",
            "1280": "https://via.placeholder.com/1280x960.webp/5d7f72/720f57",
            "1600": "https://via.placeholder.com/1600x1200.webp/1f5a0f/122845",
            "1920": "https://via.placeholder.com/1920x1440.webp/02016a/3f2821",
          },
        ],
        mileage: 444217,
        gearbox: "Automatic",
        year: 1998,
        price: 13703,
        city: "Brekkefurt",
        registeredTill: "2021-09-16T00:39:54.213Z",
        drivetrain: "FWD",
      },
      {
        brand: "Bugatti",
        model: "Wrangler",
        type: "Passenger Van",
        fuel: "Electric",
        color: "indigo",
        image: "https://via.placeholder.com/320x240.webp/55720f/804c45",
        images: [
          {
            "320": "https://via.placeholder.com/320x240.webp/326803/6f5b6c",
            "640": "https://via.placeholder.com/640x480.webp/765f3b/0f5768",
            "960": "https://via.placeholder.com/960x720.webp/1d4615/486574",
            "1280": "https://via.placeholder.com/1280x960.webp/666a59/540d49",
            "1600": "https://via.placeholder.com/1600x1200.webp/350631/487f14",
            "1920": "https://via.placeholder.com/1920x1440.webp/5f3566/3d4170",
          },
          {
            "320": "https://via.placeholder.com/320x240.webp/194774/11524b",
            "640": "https://via.placeholder.com/640x480.webp/681c4e/0f4a32",
            "960": "https://via.placeholder.com/960x720.webp/5f390f/386374",
            "1280": "https://via.placeholder.com/1280x960.webp/7e3a04/394724",
            "1600": "https://via.placeholder.com/1600x1200.webp/7f2b2b/1d127a",
            "1920": "https://via.placeholder.com/1920x1440.webp/3a581e/3d6651",
          },
          {
            "320": "https://via.placeholder.com/320x240.webp/161b5a/475e62",
            "640": "https://via.placeholder.com/640x480.webp/1d547e/124e13",
            "960": "https://via.placeholder.com/960x720.webp/702503/777209",
            "1280": "https://via.placeholder.com/1280x960.webp/37181c/2d1c2f",
            "1600": "https://via.placeholder.com/1600x1200.webp/585450/752e7e",
            "1920": "https://via.placeholder.com/1920x1440.webp/630055/3a342d",
          },
          {
            "320": "https://via.placeholder.com/320x240.webp/7c006e/21145a",
            "640": "https://via.placeholder.com/640x480.webp/37547b/300001",
            "960": "https://via.placeholder.com/960x720.webp/7c132a/60670b",
            "1280": "https://via.placeholder.com/1280x960.webp/472621/257f4f",
            "1600": "https://via.placeholder.com/1600x1200.webp/622235/470107",
            "1920": "https://via.placeholder.com/1920x1440.webp/253115/3a5d69",
          },
          {
            "320": "https://via.placeholder.com/320x240.webp/561863/597962",
            "640": "https://via.placeholder.com/640x480.webp/626661/171d2f",
            "960": "https://via.placeholder.com/960x720.webp/63003a/5f7142",
            "1280": "https://via.placeholder.com/1280x960.webp/0e3b61/0c5062",
            "1600": "https://via.placeholder.com/1600x1200.webp/6f7f12/6c6e3b",
            "1920": "https://via.placeholder.com/1920x1440.webp/6b1279/0d4d1a",
          },
        ],
        mileage: 413265,
        gearbox: "Manual",
        year: 2013,
        price: 9437,
        city: "Quintonborough",
        registeredTill: "2021-05-06T08:15:35.480Z",
        drivetrain: "FWD",
      },
      {
        brand: "Jaguar",
        model: "PT Cruiser",
        type: "Crew Cab Pickup",
        fuel: "Gasoline",
        color: "orange",
        image: "https://via.placeholder.com/320x240.webp/5b2450/5a5201",
        images: [
          {
            "320": "https://via.placeholder.com/320x240.webp/6c340e/4c2a0b",
            "640": "https://via.placeholder.com/640x480.webp/4e5007/14690a",
            "960": "https://via.placeholder.com/960x720.webp/1d5a20/4b0973",
            "1280": "https://via.placeholder.com/1280x960.webp/217a22/10414f",
            "1600": "https://via.placeholder.com/1600x1200.webp/7a032b/802d38",
            "1920": "https://via.placeholder.com/1920x1440.webp/65357b/281c68",
          },
          {
            "320": "https://via.placeholder.com/320x240.webp/37612f/7e1462",
            "640": "https://via.placeholder.com/640x480.webp/73540b/5f6064",
            "960": "https://via.placeholder.com/960x720.webp/1f4a40/2b5146",
            "1280": "https://via.placeholder.com/1280x960.webp/501a41/33233e",
            "1600": "https://via.placeholder.com/1600x1200.webp/030921/040547",
            "1920": "https://via.placeholder.com/1920x1440.webp/3a4423/056a0e",
          },
          {
            "320": "https://via.placeholder.com/320x240.webp/484f64/1a677d",
            "640": "https://via.placeholder.com/640x480.webp/2b554c/1f4f7e",
            "960": "https://via.placeholder.com/960x720.webp/607a4c/574154",
            "1280": "https://via.placeholder.com/1280x960.webp/173527/09512c",
            "1600": "https://via.placeholder.com/1600x1200.webp/756d79/7c444c",
            "1920": "https://via.placeholder.com/1920x1440.webp/7a2f69/1c4a30",
          },
          {
            "320": "https://via.placeholder.com/320x240.webp/006e37/546254",
            "640": "https://via.placeholder.com/640x480.webp/280b79/367216",
            "960": "https://via.placeholder.com/960x720.webp/083b5b/60237a",
            "1280": "https://via.placeholder.com/1280x960.webp/597a4f/096979",
            "1600": "https://via.placeholder.com/1600x1200.webp/506743/56663a",
            "1920": "https://via.placeholder.com/1920x1440.webp/7e4647/2b3857",
          },
          {
            "320": "https://via.placeholder.com/320x240.webp/52721e/7b485c",
            "640": "https://via.placeholder.com/640x480.webp/0e0e10/4e1912",
            "960": "https://via.placeholder.com/960x720.webp/315419/202f1a",
            "1280": "https://via.placeholder.com/1280x960.webp/127343/192a74",
            "1600": "https://via.placeholder.com/1600x1200.webp/076402/306a50",
            "1920": "https://via.placeholder.com/1920x1440.webp/6a2e38/2f161a",
          },
        ],
        mileage: 385522,
        gearbox: "Automatic",
        year: 1986,
        price: 6587,
        city: "East Samantha",
        registeredTill: "2021-04-10T10:27:43.269Z",
        drivetrain: "RWD",
      },
      {
        brand: "Volkswagen",
        model: "Grand Caravan",
        type: "Convertible",
        fuel: "Gasoline",
        color: "tan",
        image: "https://via.placeholder.com/320x240.webp/72366f/467a23",
        images: [
          {
            "320": "https://via.placeholder.com/320x240.webp/3d180a/5a727c",
            "640": "https://via.placeholder.com/640x480.webp/232461/445b4f",
            "960": "https://via.placeholder.com/960x720.webp/4c7e61/214d7b",
            "1280": "https://via.placeholder.com/1280x960.webp/1f6d0b/4f3a65",
            "1600": "https://via.placeholder.com/1600x1200.webp/260e02/316945",
            "1920": "https://via.placeholder.com/1920x1440.webp/515963/6c160a",
          },
          {
            "320": "https://via.placeholder.com/320x240.webp/2f3b04/73041c",
            "640": "https://via.placeholder.com/640x480.webp/7d7d40/5b1412",
            "960": "https://via.placeholder.com/960x720.webp/242e16/363330",
            "1280": "https://via.placeholder.com/1280x960.webp/7e5b48/256820",
            "1600": "https://via.placeholder.com/1600x1200.webp/322c3f/7f6d6a",
            "1920": "https://via.placeholder.com/1920x1440.webp/34341b/0a122c",
          },
          {
            "320": "https://via.placeholder.com/320x240.webp/386f6e/453f22",
            "640": "https://via.placeholder.com/640x480.webp/621b08/40177a",
            "960": "https://via.placeholder.com/960x720.webp/1c0644/234d01",
            "1280": "https://via.placeholder.com/1280x960.webp/751b14/734f14",
            "1600": "https://via.placeholder.com/1600x1200.webp/4b691a/3c3a63",
            "1920": "https://via.placeholder.com/1920x1440.webp/127c03/412509",
          },
          {
            "320": "https://via.placeholder.com/320x240.webp/6e3c22/7b7d15",
            "640": "https://via.placeholder.com/640x480.webp/720b4d/565953",
            "960": "https://via.placeholder.com/960x720.webp/23216b/383352",
            "1280": "https://via.placeholder.com/1280x960.webp/283241/6a2936",
            "1600": "https://via.placeholder.com/1600x1200.webp/562f3c/5c7469",
            "1920": "https://via.placeholder.com/1920x1440.webp/0d5e14/756027",
          },
          {
            "320": "https://via.placeholder.com/320x240.webp/5c5623/3e5071",
            "640": "https://via.placeholder.com/640x480.webp/177979/0d2126",
            "960": "https://via.placeholder.com/960x720.webp/74790b/3b6473",
            "1280": "https://via.placeholder.com/1280x960.webp/216a71/1c6538",
            "1600": "https://via.placeholder.com/1600x1200.webp/0d437e/584d2b",
            "1920": "https://via.placeholder.com/1920x1440.webp/582607/111326",
          },
        ],
        mileage: 147620,
        gearbox: "Automatic",
        year: 2020,
        price: 16872,
        city: "West Winston",
        registeredTill: "2021-12-10T21:30:41.006Z",
        drivetrain: "RWD",
      },
      {
        brand: "Honda",
        model: "Jetta",
        type: "Hatchback",
        fuel: "Electric",
        color: "orchid",
        image: "https://via.placeholder.com/320x240.webp/1c1b49/030d32",
        images: [
          {
            "320": "https://via.placeholder.com/320x240.webp/28497a/7a4b7f",
            "640": "https://via.placeholder.com/640x480.webp/6e0537/4e445c",
            "960": "https://via.placeholder.com/960x720.webp/37781c/025d20",
            "1280": "https://via.placeholder.com/1280x960.webp/285105/4c3161",
            "1600": "https://via.placeholder.com/1600x1200.webp/235b18/42294d",
            "1920": "https://via.placeholder.com/1920x1440.webp/303863/583321",
          },
          {
            "320": "https://via.placeholder.com/320x240.webp/633c39/6d045f",
            "640": "https://via.placeholder.com/640x480.webp/6e223e/567e11",
            "960": "https://via.placeholder.com/960x720.webp/0f556c/642542",
            "1280": "https://via.placeholder.com/1280x960.webp/723a0a/617f12",
            "1600": "https://via.placeholder.com/1600x1200.webp/017c59/0d346a",
            "1920": "https://via.placeholder.com/1920x1440.webp/2c077a/177d2f",
          },
          {
            "320": "https://via.placeholder.com/320x240.webp/6a5c61/0d3052",
            "640": "https://via.placeholder.com/640x480.webp/203d2a/3d2c80",
            "960": "https://via.placeholder.com/960x720.webp/5f7e20/073966",
            "1280": "https://via.placeholder.com/1280x960.webp/343631/696937",
            "1600": "https://via.placeholder.com/1600x1200.webp/294d24/640111",
            "1920": "https://via.placeholder.com/1920x1440.webp/5d3974/1d6136",
          },
          {
            "320": "https://via.placeholder.com/320x240.webp/580d35/511869",
            "640": "https://via.placeholder.com/640x480.webp/127009/4a6563",
            "960": "https://via.placeholder.com/960x720.webp/127d6b/4e2812",
            "1280": "https://via.placeholder.com/1280x960.webp/347d25/712712",
            "1600": "https://via.placeholder.com/1600x1200.webp/2f0d50/6d0617",
            "1920": "https://via.placeholder.com/1920x1440.webp/544714/3f1021",
          },
          {
            "320": "https://via.placeholder.com/320x240.webp/3d6b00/473a69",
            "640": "https://via.placeholder.com/640x480.webp/1d1232/025f63",
            "960": "https://via.placeholder.com/960x720.webp/777046/400630",
            "1280": "https://via.placeholder.com/1280x960.webp/2d0c20/6e0a69",
            "1600": "https://via.placeholder.com/1600x1200.webp/727d73/6c612e",
            "1920": "https://via.placeholder.com/1920x1440.webp/586758/07545a",
          },
        ],
        mileage: 34216,
        gearbox: "Manual",
        year: 1982,
        price: 26997,
        city: "South Lilianchester",
        registeredTill: "2021-10-11T11:42:24.624Z",
        drivetrain: "FWD",
      },
      {
        brand: "Bugatti",
        model: "Colorado",
        type: "Crew Cab Pickup",
        fuel: "Hybrid",
        color: "mint green",
        image: "https://via.placeholder.com/320x240.webp/1c4754/7f1f36",
        images: [
          {
            "320": "https://via.placeholder.com/320x240.webp/72202b/325d06",
            "640": "https://via.placeholder.com/640x480.webp/323417/294412",
            "960": "https://via.placeholder.com/960x720.webp/4c3d7c/2d2410",
            "1280": "https://via.placeholder.com/1280x960.webp/374e1b/590a6f",
            "1600": "https://via.placeholder.com/1600x1200.webp/388007/75337e",
            "1920": "https://via.placeholder.com/1920x1440.webp/35394e/206e22",
          },
          {
            "320": "https://via.placeholder.com/320x240.webp/0b1b4d/3b3c5f",
            "640": "https://via.placeholder.com/640x480.webp/4a0a34/007c10",
            "960": "https://via.placeholder.com/960x720.webp/152652/1a3344",
            "1280": "https://via.placeholder.com/1280x960.webp/76375d/4d6216",
            "1600": "https://via.placeholder.com/1600x1200.webp/2b613b/7c3b4c",
            "1920": "https://via.placeholder.com/1920x1440.webp/446d74/701621",
          },
          {
            "320": "https://via.placeholder.com/320x240.webp/3e6210/646456",
            "640": "https://via.placeholder.com/640x480.webp/116d5f/137f75",
            "960": "https://via.placeholder.com/960x720.webp/50164b/30182a",
            "1280": "https://via.placeholder.com/1280x960.webp/030771/25761e",
            "1600": "https://via.placeholder.com/1600x1200.webp/2b2501/635d18",
            "1920": "https://via.placeholder.com/1920x1440.webp/6c4776/494200",
          },
          {
            "320": "https://via.placeholder.com/320x240.webp/327f4b/3e7a64",
            "640": "https://via.placeholder.com/640x480.webp/235b08/320b20",
            "960": "https://via.placeholder.com/960x720.webp/197661/2d1a65",
            "1280": "https://via.placeholder.com/1280x960.webp/604c5c/5f7516",
            "1600": "https://via.placeholder.com/1600x1200.webp/087743/686b01",
            "1920": "https://via.placeholder.com/1920x1440.webp/493f56/4c7579",
          },
          {
            "320": "https://via.placeholder.com/320x240.webp/0b3300/684021",
            "640": "https://via.placeholder.com/640x480.webp/490544/544b28",
            "960": "https://via.placeholder.com/960x720.webp/256467/177729",
            "1280": "https://via.placeholder.com/1280x960.webp/124311/357577",
            "1600": "https://via.placeholder.com/1600x1200.webp/26403b/655c6c",
            "1920": "https://via.placeholder.com/1920x1440.webp/415556/740a35",
          },
        ],
        mileage: 489282,
        gearbox: "Automatic",
        year: 1996,
        price: 4152,
        city: "North Candelario",
        registeredTill: "2021-06-08T21:07:19.933Z",
        drivetrain: "RWD",
      },
      {
        brand: "Porsche",
        model: "Wrangler",
        type: "SUV",
        fuel: "Electric",
        color: "silver",
        image: "https://via.placeholder.com/320x240.webp/4a782f/1e7127",
        images: [
          {
            "320": "https://via.placeholder.com/320x240.webp/526b2b/546730",
            "640": "https://via.placeholder.com/640x480.webp/715568/0a4e16",
            "960": "https://via.placeholder.com/960x720.webp/5d733d/0c5871",
            "1280": "https://via.placeholder.com/1280x960.webp/4f4817/1b5f5e",
            "1600": "https://via.placeholder.com/1600x1200.webp/726349/751809",
            "1920": "https://via.placeholder.com/1920x1440.webp/082f61/387c2b",
          },
          {
            "320": "https://via.placeholder.com/320x240.webp/191427/3a5910",
            "640": "https://via.placeholder.com/640x480.webp/4a0943/08453c",
            "960": "https://via.placeholder.com/960x720.webp/407a5f/316e17",
            "1280": "https://via.placeholder.com/1280x960.webp/74032e/607646",
            "1600": "https://via.placeholder.com/1600x1200.webp/6b1605/4d4a59",
            "1920": "https://via.placeholder.com/1920x1440.webp/730669/01054b",
          },
          {
            "320": "https://via.placeholder.com/320x240.webp/0a2270/5d695c",
            "640": "https://via.placeholder.com/640x480.webp/463c23/4e170f",
            "960": "https://via.placeholder.com/960x720.webp/584b75/643b35",
            "1280": "https://via.placeholder.com/1280x960.webp/5d3e21/34261d",
            "1600": "https://via.placeholder.com/1600x1200.webp/3a134e/34482c",
            "1920": "https://via.placeholder.com/1920x1440.webp/0f784b/0e7925",
          },
          {
            "320": "https://via.placeholder.com/320x240.webp/3c4f61/3b1743",
            "640": "https://via.placeholder.com/640x480.webp/555f56/404a01",
            "960": "https://via.placeholder.com/960x720.webp/6b5871/2d263c",
            "1280": "https://via.placeholder.com/1280x960.webp/376135/44765e",
            "1600": "https://via.placeholder.com/1600x1200.webp/403030/3b1963",
            "1920": "https://via.placeholder.com/1920x1440.webp/60600f/6a1e3d",
          },
          {
            "320": "https://via.placeholder.com/320x240.webp/3d6070/0b030a",
            "640": "https://via.placeholder.com/640x480.webp/496640/792911",
            "960": "https://via.placeholder.com/960x720.webp/195f32/402a04",
            "1280": "https://via.placeholder.com/1280x960.webp/2f537a/1c435e",
            "1600": "https://via.placeholder.com/1600x1200.webp/2a097f/525734",
            "1920": "https://via.placeholder.com/1920x1440.webp/0b2511/5b1627",
          },
        ],
        mileage: 281836,
        gearbox: "Manual",
        year: 1999,
        price: 48863,
        city: "Lucioberg",
        registeredTill: "2021-06-23T02:06:35.200Z",
        drivetrain: "FWD",
      },
      {
        brand: "Bentley",
        model: "A8",
        type: "Passenger Van",
        fuel: "Diesel",
        color: "orange",
        image: "https://via.placeholder.com/320x240.webp/565a67/22344d",
        images: [
          {
            "320": "https://via.placeholder.com/320x240.webp/440916/1c2965",
            "640": "https://via.placeholder.com/640x480.webp/4f483d/000124",
            "960": "https://via.placeholder.com/960x720.webp/351e2a/281a01",
            "1280": "https://via.placeholder.com/1280x960.webp/7b220d/3f556a",
            "1600": "https://via.placeholder.com/1600x1200.webp/266a1b/213627",
            "1920": "https://via.placeholder.com/1920x1440.webp/7e3a4d/416132",
          },
          {
            "320": "https://via.placeholder.com/320x240.webp/585930/554c3b",
            "640": "https://via.placeholder.com/640x480.webp/66635c/506b37",
            "960": "https://via.placeholder.com/960x720.webp/6a0162/721a65",
            "1280": "https://via.placeholder.com/1280x960.webp/531a12/0d3130",
            "1600": "https://via.placeholder.com/1600x1200.webp/5c3e1d/532906",
            "1920": "https://via.placeholder.com/1920x1440.webp/33413a/4f4e0b",
          },
          {
            "320": "https://via.placeholder.com/320x240.webp/570f36/377b77",
            "640": "https://via.placeholder.com/640x480.webp/60425b/766054",
            "960": "https://via.placeholder.com/960x720.webp/0a1b4a/166801",
            "1280": "https://via.placeholder.com/1280x960.webp/4b3e11/1c2e17",
            "1600": "https://via.placeholder.com/1600x1200.webp/6f6e73/3b203d",
            "1920": "https://via.placeholder.com/1920x1440.webp/4b1a64/4b486a",
          },
          {
            "320": "https://via.placeholder.com/320x240.webp/4c4f2b/2a014a",
            "640": "https://via.placeholder.com/640x480.webp/3d1166/1a220f",
            "960": "https://via.placeholder.com/960x720.webp/5e6b78/755706",
            "1280": "https://via.placeholder.com/1280x960.webp/33676c/041244",
            "1600": "https://via.placeholder.com/1600x1200.webp/465010/486b0f",
            "1920": "https://via.placeholder.com/1920x1440.webp/225c6a/3e4a7b",
          },
          {
            "320": "https://via.placeholder.com/320x240.webp/6d776a/450051",
            "640": "https://via.placeholder.com/640x480.webp/6d2874/225767",
            "960": "https://via.placeholder.com/960x720.webp/541a6f/7c1f6f",
            "1280": "https://via.placeholder.com/1280x960.webp/0c3e08/203f15",
            "1600": "https://via.placeholder.com/1600x1200.webp/193112/68297e",
            "1920": "https://via.placeholder.com/1920x1440.webp/74327d/006c30",
          },
        ],
        mileage: 415964,
        gearbox: "Manual",
        year: 1995,
        price: 43394,
        city: "West Aglaeside",
        registeredTill: "2021-04-27T01:01:40.761Z",
        drivetrain: "AWD",
      },
    ]);
    // const getCars = async () => {
    //   cars.value = await fetch("/api/cars").then((res) => res.json());
    // };

    const variants = ["CarListItemThree", "CarListItemTwo", "CarListItemOne"];
    const currentVariant = ref(variants[0]);
    const changeVariant = () => {
      const currentViewIndex = variants.findIndex(
        (i) => i === currentVariant.value
      );
      currentVariant.value = variants[currentViewIndex + 1] || variants[0];
    };

    // getCars();

    return {
      cars,
      numberFormatter: new Intl.NumberFormat("ru-RU"),

      currentVariant,
      changeVariant,
    };
  },
});
</script>
