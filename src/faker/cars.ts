import f from "faker";

// const colors = [
//   "red",
//   "green",
//   "blue",
//   "yellow",
//   "purple",
//   "mint green",
//   "teal",
//   "white",
//   "black",
//   "orange",
//   "pink",
//   "grey",
//   "maroon",
//   "violet",
//   "turquoise",
//   "tan",
//   "sky blue",
//   "salmon",
//   "plum",
//   "orchid",
//   "olive",
//   "magenta",
//   "lime",
//   "ivory",
//   "indigo",
//   "gold",
//   "fuchsia",
//   "cyan",
//   "azure",
//   "lavender",
//   "silver",
// ];

const photos = [
  [
    {
      320: "https://firebasestorage.googleapis.com/v0/b/vue-auto.appspot.com/o/stelvio%2F01_320x240.jpeg?alt=media&token=8614f4a2-8688-4520-a42e-1eda9c9d30a4",
      640: "https://firebasestorage.googleapis.com/v0/b/vue-auto.appspot.com/o/stelvio%2F01_640x480.jpeg?alt=media&token=56f81bb6-bbc9-4875-9b64-9053f7d2f1b0",
      960: "https://firebasestorage.googleapis.com/v0/b/vue-auto.appspot.com/o/stelvio%2F01_960x720.jpeg?alt=media&token=ea886114-04bb-4bf4-920a-bb59320034d7",
      1280: "https://firebasestorage.googleapis.com/v0/b/vue-auto.appspot.com/o/stelvio%2F01_1280x960.jpeg?alt=media&token=35c7f7af-7918-46f0-8ae5-e4c51f57af27",
      1600: "https://firebasestorage.googleapis.com/v0/b/vue-auto.appspot.com/o/stelvio%2F01_1600x1200.jpeg?alt=media&token=b0add761-ff9d-4949-899b-857f386ae76a",
      1920: "https://firebasestorage.googleapis.com/v0/b/vue-auto.appspot.com/o/stelvio%2F01_1920x1440.jpeg?alt=media&token=529658c5-028b-4555-ba82-f1d712601da4",
    },
    {
      320: "https://firebasestorage.googleapis.com/v0/b/vue-auto.appspot.com/o/stelvio%2F02_320x240.jpeg?alt=media&token=2fe23bdc-c92c-4166-bec2-7a6f3755c183",
      640: "https://firebasestorage.googleapis.com/v0/b/vue-auto.appspot.com/o/stelvio%2F02_640x480.jpeg?alt=media&token=ec624cbd-5a09-44fc-9bb5-ae349b0f3d09",
      960: "https://firebasestorage.googleapis.com/v0/b/vue-auto.appspot.com/o/stelvio%2F02_960x720.jpeg?alt=media&token=f13fe59d-a702-443e-8fca-e1d0e3ba0091",
      1280: "https://firebasestorage.googleapis.com/v0/b/vue-auto.appspot.com/o/stelvio%2F02_1280x960.jpeg?alt=media&token=1bf2d207-0375-4997-ada2-446827b39843",
      1600: "https://firebasestorage.googleapis.com/v0/b/vue-auto.appspot.com/o/stelvio%2F02_1600x1200.jpeg?alt=media&token=a2b1efcc-83b3-46ad-98b6-ac79dcff1a60",
      1920: "https://firebasestorage.googleapis.com/v0/b/vue-auto.appspot.com/o/stelvio%2F02_1920x1440.jpeg?alt=media&token=1382378a-09ed-455e-993f-bc7b73beee66",
    },
    {
      320: "https://firebasestorage.googleapis.com/v0/b/vue-auto.appspot.com/o/stelvio%2F03_320x240.jpeg?alt=media&token=8c13f3fb-827c-40c7-96c1-987e00a7a01c",
      640: "https://firebasestorage.googleapis.com/v0/b/vue-auto.appspot.com/o/stelvio%2F03_640x480.jpeg?alt=media&token=c6561ef9-5913-495a-8763-80a6505f4836",
      960: "https://firebasestorage.googleapis.com/v0/b/vue-auto.appspot.com/o/stelvio%2F03_960x720.jpeg?alt=media&token=64d560dd-0d6a-42a6-a632-d18178572fbb",
      1280: "https://firebasestorage.googleapis.com/v0/b/vue-auto.appspot.com/o/stelvio%2F03_1280x960.jpeg?alt=media&token=eb3fba23-2403-42b3-b0a6-31a040523db1",
      1600: "https://firebasestorage.googleapis.com/v0/b/vue-auto.appspot.com/o/stelvio%2F03_1600x1200.jpeg?alt=media&token=e5d9da50-2493-42e4-95dd-ee1abc622315",
      1920: "https://firebasestorage.googleapis.com/v0/b/vue-auto.appspot.com/o/stelvio%2F03_1920x1440.jpeg?alt=media&token=8a178365-5ec5-4e9d-bf3d-8734a6413446",
    },
    {
      320: "https://firebasestorage.googleapis.com/v0/b/vue-auto.appspot.com/o/stelvio%2F04_320x240.jpeg?alt=media&token=a872e787-9c82-444f-86d4-f7e4b7af3a84",
      640: "https://firebasestorage.googleapis.com/v0/b/vue-auto.appspot.com/o/stelvio%2F04_640x480.jpeg?alt=media&token=284b5d5e-907b-45c0-bf09-fab128b76806",
      960: "https://firebasestorage.googleapis.com/v0/b/vue-auto.appspot.com/o/stelvio%2F04_960x720.jpeg?alt=media&token=5a951510-d5ba-4f78-b8fa-c47a7baa85d5",
      1280: "https://firebasestorage.googleapis.com/v0/b/vue-auto.appspot.com/o/stelvio%2F04_1280x960.jpeg?alt=media&token=038fe38d-ca1c-4218-9e62-97548666a8f9",
      1600: "https://firebasestorage.googleapis.com/v0/b/vue-auto.appspot.com/o/stelvio%2F04_1600x1200.jpeg?alt=media&token=9cc24b4b-4ad8-4f6b-9f36-d387d73ce994",
      1920: "https://firebasestorage.googleapis.com/v0/b/vue-auto.appspot.com/o/stelvio%2F04_1920x1440.jpeg?alt=media&token=c29f19ac-6beb-4c8b-ba1f-c3f44f53d3f4",
    },
    {
      320: "https://firebasestorage.googleapis.com/v0/b/vue-auto.appspot.com/o/stelvio%2F05_320x240.jpeg?alt=media&token=457d003b-ee69-4cb7-8299-8f44d7ed830b",
      640: "https://firebasestorage.googleapis.com/v0/b/vue-auto.appspot.com/o/stelvio%2F05_640x480.jpeg?alt=media&token=4fcd63a1-15ad-47a0-abcb-4e06a42aad74",
      960: "https://firebasestorage.googleapis.com/v0/b/vue-auto.appspot.com/o/stelvio%2F05_960x720.jpeg?alt=media&token=ee18b3af-d99f-4999-8cf6-ffabfd575625",
      1280: "https://firebasestorage.googleapis.com/v0/b/vue-auto.appspot.com/o/stelvio%2F05_1280x960.jpeg?alt=media&token=994386e0-4fae-46b9-9ba1-ff8dffdd9a7a",
      1600: "https://firebasestorage.googleapis.com/v0/b/vue-auto.appspot.com/o/stelvio%2F05_1600x1200.jpeg?alt=media&token=a84ac9cd-cfe2-4a42-8545-ce94d3698b13",
      1920: "https://firebasestorage.googleapis.com/v0/b/vue-auto.appspot.com/o/stelvio%2F05_1920x1440.jpeg?alt=media&token=11932d0a-3877-474d-8598-fbd274beb1fa",
    },
    {
      320: "https://firebasestorage.googleapis.com/v0/b/vue-auto.appspot.com/o/stelvio%2F06_320x240.jpeg?alt=media&token=2414fe23-9826-419c-9dbb-43ce0a5aaff2",
      640: "https://firebasestorage.googleapis.com/v0/b/vue-auto.appspot.com/o/stelvio%2F06_640x480.jpeg?alt=media&token=cbeb9654-8d36-4b72-88ef-66e2106e4a9b",
      960: "https://firebasestorage.googleapis.com/v0/b/vue-auto.appspot.com/o/stelvio%2F06_960x720.jpeg?alt=media&token=7af592eb-5d1d-4c85-9fea-4bef8746ce59",
      1280: "https://firebasestorage.googleapis.com/v0/b/vue-auto.appspot.com/o/stelvio%2F06_1280x960.jpeg?alt=media&token=9ada0972-5cef-434e-871b-8620d2e65249",
      1600: "https://firebasestorage.googleapis.com/v0/b/vue-auto.appspot.com/o/stelvio%2F06_1600x1200.jpeg?alt=media&token=61dc7ed0-b3d1-4354-814d-47fb811df437",
      1920: "https://firebasestorage.googleapis.com/v0/b/vue-auto.appspot.com/o/stelvio%2F06_1920x1440.jpeg?alt=media&token=d3911f98-5040-41a5-809b-a2dacd6f47e2",
    },
    {
      320: "https://firebasestorage.googleapis.com/v0/b/vue-auto.appspot.com/o/stelvio%2F07_320x240.jpeg?alt=media&token=32e788a8-5e03-4fd2-8390-863cfcb8b7fc",
      640: "https://firebasestorage.googleapis.com/v0/b/vue-auto.appspot.com/o/stelvio%2F07_640x480.jpeg?alt=media&token=0c60f00f-6c5f-4002-be6c-88becd0ba067",
      960: "https://firebasestorage.googleapis.com/v0/b/vue-auto.appspot.com/o/stelvio%2F07_960x720.jpeg?alt=media&token=d8b127bd-dd33-48e2-9e0c-54f20b579d43",
      1280: "https://firebasestorage.googleapis.com/v0/b/vue-auto.appspot.com/o/stelvio%2F07_1280x960.jpeg?alt=media&token=408dab36-3267-41db-adda-f97f2dcf5d64",
      1600: "https://firebasestorage.googleapis.com/v0/b/vue-auto.appspot.com/o/stelvio%2F07_1600x1200.jpeg?alt=media&token=9a7bb95b-9244-488c-9f8c-6bd0e8228071",
      1920: "https://firebasestorage.googleapis.com/v0/b/vue-auto.appspot.com/o/stelvio%2F07_1920x1440.jpeg?alt=media&token=73fb047c-b93b-4416-aec7-17c042ba6195",
    },
    {
      320: "https://firebasestorage.googleapis.com/v0/b/vue-auto.appspot.com/o/stelvio%2F08_320x240.jpeg?alt=media&token=49e88670-687f-45a8-82b4-e5724b9fbdba",
      640: "https://firebasestorage.googleapis.com/v0/b/vue-auto.appspot.com/o/stelvio%2F08_640x480.jpeg?alt=media&token=8ce7275d-71a6-40b0-986c-dc49bc09c635",
      960: "https://firebasestorage.googleapis.com/v0/b/vue-auto.appspot.com/o/stelvio%2F08_960x720.jpeg?alt=media&token=4728c6fd-8eb4-41e0-a2eb-0ddb2b89f2e4",
      1280: "https://firebasestorage.googleapis.com/v0/b/vue-auto.appspot.com/o/stelvio%2F08_1280x960.jpeg?alt=media&token=7a505076-eda1-46ea-8d19-8c171db356c8",
      1600: "https://firebasestorage.googleapis.com/v0/b/vue-auto.appspot.com/o/stelvio%2F08_1600x1200.jpeg?alt=media&token=4691e2ca-7bb1-4e11-93ef-a30d77dd4bc1",
      1920: "https://firebasestorage.googleapis.com/v0/b/vue-auto.appspot.com/o/stelvio%2F08_1920x1440.jpeg?alt=media&token=64bfed6a-b1df-4d34-ada8-73c1b4889a20",
    },
    {
      320: "https://firebasestorage.googleapis.com/v0/b/vue-auto.appspot.com/o/stelvio%2F09_320x240.jpeg?alt=media&token=1f0b23ee-6af2-4b48-aa64-bfb38cdb1ba0",
      640: "https://firebasestorage.googleapis.com/v0/b/vue-auto.appspot.com/o/stelvio%2F09_640x480.jpeg?alt=media&token=507448aa-de30-46c4-a9f8-341f4a7a5a28",
      960: "https://firebasestorage.googleapis.com/v0/b/vue-auto.appspot.com/o/stelvio%2F09_960x720.jpeg?alt=media&token=0329afbc-01dd-41c3-bf1f-6da3fd1ddd7c",
      1280: "https://firebasestorage.googleapis.com/v0/b/vue-auto.appspot.com/o/stelvio%2F09_1280x960.jpeg?alt=media&token=81b21b54-bde0-4b6c-a7f9-d07806acbee1",
      1600: "https://firebasestorage.googleapis.com/v0/b/vue-auto.appspot.com/o/stelvio%2F09_1600x1200.jpeg?alt=media&token=18b1d71b-e585-48d3-a690-c2c1d0f03cc7",
      1920: "https://firebasestorage.googleapis.com/v0/b/vue-auto.appspot.com/o/stelvio%2F09_1920x1440.jpeg?alt=media&token=7593ff7d-81c2-4f55-b455-ffcec90d98cd",
    },
  ],
  [
    {
      320: "https://firebasestorage.googleapis.com/v0/b/vue-auto.appspot.com/o/polo%2F01_320x240.jpeg?alt=media&token=19938060-2f55-4fc7-8004-58162850ac3a",
      640: "https://firebasestorage.googleapis.com/v0/b/vue-auto.appspot.com/o/polo%2F01_640x480.jpeg?alt=media&token=cda4f505-0171-4996-a066-447d2f90f566",
      960: "https://firebasestorage.googleapis.com/v0/b/vue-auto.appspot.com/o/polo%2F01_960x720.jpeg?alt=media&token=82dc147d-080c-43bb-a17d-9d862fe56b02",
      1280: "https://firebasestorage.googleapis.com/v0/b/vue-auto.appspot.com/o/polo%2F01_1280x960.jpeg?alt=media&token=e229c369-7b4d-4966-92ef-89f4d5916c8e",
      1600: "https://firebasestorage.googleapis.com/v0/b/vue-auto.appspot.com/o/polo%2F01_1600x1200.jpeg?alt=media&token=8ad271a7-b65d-4401-bd8e-4e8cae88c113",
      1920: "https://firebasestorage.googleapis.com/v0/b/vue-auto.appspot.com/o/polo%2F01_1920x1440.jpeg?alt=media&token=6467492a-c9c1-4cbc-b577-7c60039fd3a0",
    },
    {
      320: "https://firebasestorage.googleapis.com/v0/b/vue-auto.appspot.com/o/polo%2F02_320x240.jpeg?alt=media&token=86916a13-0702-422e-a375-ad712aed1a89",
      640: "https://firebasestorage.googleapis.com/v0/b/vue-auto.appspot.com/o/polo%2F02_640x480.jpeg?alt=media&token=41214224-7da6-4ac5-bfd4-00fe481ba2d7",
      960: "https://firebasestorage.googleapis.com/v0/b/vue-auto.appspot.com/o/polo%2F02_960x720.jpeg?alt=media&token=38b3fee0-e2c3-4f3f-ade9-4ed786ea43ce",
      1280: "https://firebasestorage.googleapis.com/v0/b/vue-auto.appspot.com/o/polo%2F02_1280x960.jpeg?alt=media&token=e914c83b-f8f2-4757-877c-96501f96f369",
      1600: "https://firebasestorage.googleapis.com/v0/b/vue-auto.appspot.com/o/polo%2F02_1600x1200.jpeg?alt=media&token=6cd58d8d-c7c7-4e60-96a0-9e5e84d943f1",
      1920: "https://firebasestorage.googleapis.com/v0/b/vue-auto.appspot.com/o/polo%2F02_1920x1440.jpeg?alt=media&token=a9d3f156-6bca-4bfe-a18c-9dd5241a9b6c",
    },
    {
      320: "https://firebasestorage.googleapis.com/v0/b/vue-auto.appspot.com/o/polo%2F03_320x240.jpeg?alt=media&token=d203bd7b-622a-4d14-b9b2-263bba0d3d4e",
      640: "https://firebasestorage.googleapis.com/v0/b/vue-auto.appspot.com/o/polo%2F03_640x480.jpeg?alt=media&token=9cceb128-f861-40df-809e-66a31c23d16b",
      960: "https://firebasestorage.googleapis.com/v0/b/vue-auto.appspot.com/o/polo%2F03_960x720.jpeg?alt=media&token=80a8c2be-c490-4bfe-bec7-77243a9dda2a",
      1280: "https://firebasestorage.googleapis.com/v0/b/vue-auto.appspot.com/o/polo%2F03_1280x960.jpeg?alt=media&token=fad6291a-8974-46aa-8013-3f24092a312e",
      1600: "https://firebasestorage.googleapis.com/v0/b/vue-auto.appspot.com/o/polo%2F03_1600x1200.jpeg?alt=media&token=c6bd056d-087c-47db-a973-338c6505d7b1",
      1920: "https://firebasestorage.googleapis.com/v0/b/vue-auto.appspot.com/o/polo%2F03_1920x1440.jpeg?alt=media&token=605a1280-657e-44a9-a80d-3f4425a28569",
    },
    {
      320: "https://firebasestorage.googleapis.com/v0/b/vue-auto.appspot.com/o/polo%2F04_320x240.jpeg?alt=media&token=a83cec63-9666-408f-bb85-62464c3f9bef",
      640: "https://firebasestorage.googleapis.com/v0/b/vue-auto.appspot.com/o/polo%2F04_640x480.jpeg?alt=media&token=8e82c800-a363-4243-bdc3-e73ad972e1a7",
      960: "https://firebasestorage.googleapis.com/v0/b/vue-auto.appspot.com/o/polo%2F04_960x720.jpeg?alt=media&token=083eec18-4607-45f7-abda-33571adb6303",
      1280: "https://firebasestorage.googleapis.com/v0/b/vue-auto.appspot.com/o/polo%2F04_1280x960.jpeg?alt=media&token=3aa97a79-bc83-4e8c-a977-062d05ac0371",
      1600: "https://firebasestorage.googleapis.com/v0/b/vue-auto.appspot.com/o/polo%2F04_1600x1200.jpeg?alt=media&token=9599ade0-ec07-4746-8987-b50c48988b6f",
      1920: "https://firebasestorage.googleapis.com/v0/b/vue-auto.appspot.com/o/polo%2F04_1920x1440.jpeg?alt=media&token=b3e9be18-f0fb-4997-bb57-d3a9ac852b85",
    },
    {
      320: "https://firebasestorage.googleapis.com/v0/b/vue-auto.appspot.com/o/polo%2F05_320x240.jpeg?alt=media&token=febdc7fa-0d6a-4910-84d5-0181d2edaa94",
      640: "https://firebasestorage.googleapis.com/v0/b/vue-auto.appspot.com/o/polo%2F05_640x480.jpeg?alt=media&token=e5099d98-efcf-4f10-891e-744ae69637af",
      960: "https://firebasestorage.googleapis.com/v0/b/vue-auto.appspot.com/o/polo%2F05_960x720.jpeg?alt=media&token=eca04762-13a6-4cfc-9e06-837269d7b9ce",
      1280: "https://firebasestorage.googleapis.com/v0/b/vue-auto.appspot.com/o/polo%2F05_1280x960.jpeg?alt=media&token=460fb7f7-664f-4f86-8315-a5a899887bd2",
      1600: "https://firebasestorage.googleapis.com/v0/b/vue-auto.appspot.com/o/polo%2F05_1600x1200.jpeg?alt=media&token=d7d3db3d-7fbc-4537-9635-ad20be1c692b",
      1920: "https://firebasestorage.googleapis.com/v0/b/vue-auto.appspot.com/o/polo%2F05_1920x1440.jpeg?alt=media&token=c7773acf-e9ac-49f1-b701-51102dbd51f7",
    },
    {
      320: "https://firebasestorage.googleapis.com/v0/b/vue-auto.appspot.com/o/polo%2F06_320x240.jpeg?alt=media&token=8a9a5c58-ff3e-4426-a7d0-870a0fb9b3cd",
      640: "https://firebasestorage.googleapis.com/v0/b/vue-auto.appspot.com/o/polo%2F06_640x480.jpeg?alt=media&token=0f942d11-f66f-4077-b335-c09a16d4175f",
      960: "https://firebasestorage.googleapis.com/v0/b/vue-auto.appspot.com/o/polo%2F06_960x720.jpeg?alt=media&token=36a9f27e-b0e3-4b11-93ea-7596e3762756",
      1280: "https://firebasestorage.googleapis.com/v0/b/vue-auto.appspot.com/o/polo%2F06_1280x960.jpeg?alt=media&token=45dd8542-346e-4a92-a548-804db298d761",
      1600: "https://firebasestorage.googleapis.com/v0/b/vue-auto.appspot.com/o/polo%2F06_1600x1200.jpeg?alt=media&token=4ca3ef42-e2b8-43e3-98ac-fdff3699a665",
      1920: "https://firebasestorage.googleapis.com/v0/b/vue-auto.appspot.com/o/polo%2F06_1920x1440.jpeg?alt=media&token=9fd27a50-baf2-44fa-bc8c-a5746195c00e",
    },
  ],
  [
    {
      320: "https://firebasestorage.googleapis.com/v0/b/vue-auto.appspot.com/o/focus%2F01_320x240.jpeg?alt=media&token=a0ca5dc3-049c-4055-bd3c-8cfee7492801",
      640: "https://firebasestorage.googleapis.com/v0/b/vue-auto.appspot.com/o/focus%2F01_640x480.jpeg?alt=media&token=91b76109-6864-40ee-bc56-58ff37cbcbf5",
      960: "https://firebasestorage.googleapis.com/v0/b/vue-auto.appspot.com/o/focus%2F01_960x720.jpeg?alt=media&token=8fbba2cb-1557-49da-bf18-6ce41de632c3",
      1280: "https://firebasestorage.googleapis.com/v0/b/vue-auto.appspot.com/o/focus%2F01_1280x960.jpeg?alt=media&token=a09e9b3c-213f-44f7-adbe-b4d3a940dde4",
      1600: "https://firebasestorage.googleapis.com/v0/b/vue-auto.appspot.com/o/focus%2F01_1600x1200.jpeg?alt=media&token=494a6b3c-3bcc-401b-bbe5-8a9908a99be0",
      1920: "https://firebasestorage.googleapis.com/v0/b/vue-auto.appspot.com/o/focus%2F01_1920x1440.jpeg?alt=media&token=cac19903-a9d9-49bc-a34e-94a45fbc4513",
    },
    {
      320: "https://firebasestorage.googleapis.com/v0/b/vue-auto.appspot.com/o/focus%2F02_320x240.jpeg?alt=media&token=fdd3abf9-41f9-417a-a0a2-63a6eb0d86dd",
      640: "https://firebasestorage.googleapis.com/v0/b/vue-auto.appspot.com/o/focus%2F02_640x480.jpeg?alt=media&token=598a23ad-c977-4c07-b34c-221c5a578b85",
      960: "https://firebasestorage.googleapis.com/v0/b/vue-auto.appspot.com/o/focus%2F02_960x720.jpeg?alt=media&token=73deec01-2065-43e2-95fc-352d11644039",
      1280: "https://firebasestorage.googleapis.com/v0/b/vue-auto.appspot.com/o/focus%2F02_1280x960.jpeg?alt=media&token=841b587a-0920-4581-b9e6-52c8677f0e4a",
      1600: "https://firebasestorage.googleapis.com/v0/b/vue-auto.appspot.com/o/focus%2F02_1600x1200.jpeg?alt=media&token=2d459e2d-5659-4a57-9083-03fba4b99145",
      1920: "https://firebasestorage.googleapis.com/v0/b/vue-auto.appspot.com/o/focus%2F02_1920x1440.jpeg?alt=media&token=badb343c-3384-4e22-9fe9-7f05fe4d46f8",
    },
    {
      320: "https://firebasestorage.googleapis.com/v0/b/vue-auto.appspot.com/o/focus%2F03_320x240.jpeg?alt=media&token=ee8f82de-aa7a-432b-8eb3-6c701b7da1e2",
      640: "https://firebasestorage.googleapis.com/v0/b/vue-auto.appspot.com/o/focus%2F03_640x480.jpeg?alt=media&token=45637ebb-e642-4d11-a0b3-489bfe18e15c",
      960: "https://firebasestorage.googleapis.com/v0/b/vue-auto.appspot.com/o/focus%2F03_960x720.jpeg?alt=media&token=b8c8b62f-41c5-43ba-a05f-6607e6261783",
      1280: "https://firebasestorage.googleapis.com/v0/b/vue-auto.appspot.com/o/focus%2F03_1280x960.jpeg?alt=media&token=47293282-3fac-42dc-8351-30dd75eb50bc",
      1600: "https://firebasestorage.googleapis.com/v0/b/vue-auto.appspot.com/o/focus%2F03_1600x1200.jpeg?alt=media&token=31ba6b20-240d-4833-888a-1f46e2e79700",
      1920: "https://firebasestorage.googleapis.com/v0/b/vue-auto.appspot.com/o/focus%2F03_1920x1440.jpeg?alt=media&token=796143be-7548-459a-97b4-69eaca6cde04",
    },
    {
      320: "https://firebasestorage.googleapis.com/v0/b/vue-auto.appspot.com/o/focus%2F04_320x240.jpeg?alt=media&token=272568bc-d88c-46c5-8291-53f3ab76e52a",
      640: "https://firebasestorage.googleapis.com/v0/b/vue-auto.appspot.com/o/focus%2F04_640x480.jpeg?alt=media&token=7419598e-166d-458c-99d4-89daa0112b64",
      960: "https://firebasestorage.googleapis.com/v0/b/vue-auto.appspot.com/o/focus%2F04_960x720.jpeg?alt=media&token=f658486a-8ae2-4575-bcac-bda36671f1bf",
      1280: "https://firebasestorage.googleapis.com/v0/b/vue-auto.appspot.com/o/focus%2F04_1280x960.jpeg?alt=media&token=85fbb2b7-428f-482d-b01f-67b7eda29927",
      1600: "https://firebasestorage.googleapis.com/v0/b/vue-auto.appspot.com/o/focus%2F04_1600x1200.jpeg?alt=media&token=aaf03184-5bab-4fe2-ac50-0cc8a3fa94bc",
      1920: "https://firebasestorage.googleapis.com/v0/b/vue-auto.appspot.com/o/focus%2F04_1920x1440.jpeg?alt=media&token=9fb8e4c1-63bb-4b11-af12-8448c48249cf",
    },
    {
      320: "https://firebasestorage.googleapis.com/v0/b/vue-auto.appspot.com/o/focus%2F05_320x240.jpeg?alt=media&token=86fab70c-f56d-4b28-bddc-5b321c8263e3",
      640: "https://firebasestorage.googleapis.com/v0/b/vue-auto.appspot.com/o/focus%2F05_640x480.jpeg?alt=media&token=12c2e7ed-66f9-46ae-916c-23c2371952dc",
      960: "https://firebasestorage.googleapis.com/v0/b/vue-auto.appspot.com/o/focus%2F05_960x720.jpeg?alt=media&token=ab4c1d0f-eff1-4c69-a9a0-81bc5c8d0f68",
      1280: "https://firebasestorage.googleapis.com/v0/b/vue-auto.appspot.com/o/focus%2F05_1280x960.jpeg?alt=media&token=f824a35d-34b3-4da0-9ecb-9a84ba4c24c3",
      1600: "https://firebasestorage.googleapis.com/v0/b/vue-auto.appspot.com/o/focus%2F05_1600x1200.jpeg?alt=media&token=a6322ee5-e48b-4fd0-ab1d-5b779e6395ea",
      1920: "https://firebasestorage.googleapis.com/v0/b/vue-auto.appspot.com/o/focus%2F05_1920x1440.jpeg?alt=media&token=526a3fc0-955b-4600-9ad4-260867310d63",
    },
    {
      320: "https://firebasestorage.googleapis.com/v0/b/vue-auto.appspot.com/o/focus%2F06_320x240.jpeg?alt=media&token=43987034-7b64-4f3c-af16-f01c9779bc46",
      640: "https://firebasestorage.googleapis.com/v0/b/vue-auto.appspot.com/o/focus%2F06_640x480.jpeg?alt=media&token=f20361fc-da87-466f-88e6-e8138d3d5807",
      960: "https://firebasestorage.googleapis.com/v0/b/vue-auto.appspot.com/o/focus%2F06_960x720.jpeg?alt=media&token=29bf43b4-39c4-4f41-9fd5-6592a71ea4b7",
      1280: "https://firebasestorage.googleapis.com/v0/b/vue-auto.appspot.com/o/focus%2F06_1280x960.jpeg?alt=media&token=6777c112-1e13-4d3c-b74c-b138083991a0",
      1600: "https://firebasestorage.googleapis.com/v0/b/vue-auto.appspot.com/o/focus%2F06_1600x1200.jpeg?alt=media&token=7815a52f-5829-4fd6-9f15-7f29dcce2eb8",
      1920: "https://firebasestorage.googleapis.com/v0/b/vue-auto.appspot.com/o/focus%2F06_1920x1440.jpeg?alt=media&token=7704c78f-0d50-4b48-8ca3-2f192a1b065a",
    },
    {
      320: "https://firebasestorage.googleapis.com/v0/b/vue-auto.appspot.com/o/focus%2F07_320x240.jpeg?alt=media&token=f2fb96c2-83cf-482b-a125-6efcbf71d6a6",
      640: "https://firebasestorage.googleapis.com/v0/b/vue-auto.appspot.com/o/focus%2F07_640x480.jpeg?alt=media&token=3be8dac9-b5e5-4ea0-936e-eae81a689e7e",
      960: "https://firebasestorage.googleapis.com/v0/b/vue-auto.appspot.com/o/focus%2F07_960x720.jpeg?alt=media&token=218402d4-6aec-464f-8b04-acffd1ad64df",
      1280: "https://firebasestorage.googleapis.com/v0/b/vue-auto.appspot.com/o/focus%2F07_1280x960.jpeg?alt=media&token=1e22bdf8-ebc1-44eb-a6ae-ae6696ef8ae9",
      1600: "https://firebasestorage.googleapis.com/v0/b/vue-auto.appspot.com/o/focus%2F07_1600x1200.jpeg?alt=media&token=23d4773a-b29e-422c-9149-3f5afc6ef75a",
      1920: "https://firebasestorage.googleapis.com/v0/b/vue-auto.appspot.com/o/focus%2F07_1920x1440.jpeg?alt=media&token=da9a1f47-31c3-4eb0-a4ef-f47798f027b6",
    },
  ],
  [
    {
      320: "https://firebasestorage.googleapis.com/v0/b/vue-auto.appspot.com/o/golf%2F01_320x240.jpeg?alt=media&token=621091af-0560-4333-93e7-38589ef69a9a",
      640: "https://firebasestorage.googleapis.com/v0/b/vue-auto.appspot.com/o/golf%2F01_640x480.jpeg?alt=media&token=ad38c50f-0d3f-49cc-b9b7-17f8f7d769cc",
      960: "https://firebasestorage.googleapis.com/v0/b/vue-auto.appspot.com/o/golf%2F01_960x720.jpeg?alt=media&token=0b7a7c77-975a-4705-b2a8-ed57899bd654",
      1280: "https://firebasestorage.googleapis.com/v0/b/vue-auto.appspot.com/o/golf%2F01_1280x960.jpeg?alt=media&token=19d3fd44-dae8-4399-ab2c-8d8af19f3798",
      1600: "https://firebasestorage.googleapis.com/v0/b/vue-auto.appspot.com/o/golf%2F01_1600x1200.jpeg?alt=media&token=afcfcd50-4e1c-4b0d-8581-11618a20357b",
      1920: "https://firebasestorage.googleapis.com/v0/b/vue-auto.appspot.com/o/golf%2F01_1920x1440.jpeg?alt=media&token=c29d3698-e023-4870-8284-c75dfd49340f",
    },
    {
      320: "https://firebasestorage.googleapis.com/v0/b/vue-auto.appspot.com/o/golf%2F02_320x240.jpeg?alt=media&token=72950660-b8ce-46a2-85aa-a327e2db0adf",
      640: "https://firebasestorage.googleapis.com/v0/b/vue-auto.appspot.com/o/golf%2F02_640x480.jpeg?alt=media&token=47b528e1-fb47-4031-9a6b-ad505b699577",
      960: "https://firebasestorage.googleapis.com/v0/b/vue-auto.appspot.com/o/golf%2F02_960x720.jpeg?alt=media&token=0f5c7dec-7957-4ff1-8654-4260c7f06b55",
      1280: "https://firebasestorage.googleapis.com/v0/b/vue-auto.appspot.com/o/golf%2F02_1280x960.jpeg?alt=media&token=8f7842f1-ccd9-4f8c-ab97-3f24f609bed8",
      1600: "https://firebasestorage.googleapis.com/v0/b/vue-auto.appspot.com/o/golf%2F02_1600x1200.jpeg?alt=media&token=01925ce4-473f-4649-9c79-915e80c2039e",
      1920: "https://firebasestorage.googleapis.com/v0/b/vue-auto.appspot.com/o/golf%2F02_1920x1440.jpeg?alt=media&token=f29c5f22-4428-4391-b758-c7c6e929064f",
    },
    {
      320: "https://firebasestorage.googleapis.com/v0/b/vue-auto.appspot.com/o/golf%2F03_320x240.jpeg?alt=media&token=3918f22f-d857-4773-815f-d88968c110d6",
      640: "https://firebasestorage.googleapis.com/v0/b/vue-auto.appspot.com/o/golf%2F03_640x480.jpeg?alt=media&token=a12682a3-1fe3-46f0-b19f-a5df30b3d892",
      960: "https://firebasestorage.googleapis.com/v0/b/vue-auto.appspot.com/o/golf%2F03_960x720.jpeg?alt=media&token=daae6315-2b88-4487-b1b4-b1ffda8a8d41",
      1280: "https://firebasestorage.googleapis.com/v0/b/vue-auto.appspot.com/o/golf%2F03_1280x960.jpeg?alt=media&token=9fe289ef-e332-496c-bb11-ba35ae03d29c",
      1600: "https://firebasestorage.googleapis.com/v0/b/vue-auto.appspot.com/o/golf%2F03_1600x1200.jpeg?alt=media&token=4dea630f-8ac1-4d86-9447-6896ac4f3881",
      1920: "https://firebasestorage.googleapis.com/v0/b/vue-auto.appspot.com/o/golf%2F03_1920x1440.jpeg?alt=media&token=b6c69bdb-906f-4e77-b531-32a5f88f1eef",
    },
    {
      320: "https://firebasestorage.googleapis.com/v0/b/vue-auto.appspot.com/o/golf%2F04_320x240.jpeg?alt=media&token=7b1cfa1f-a220-4787-88f8-83affec6b1b0",
      640: "https://firebasestorage.googleapis.com/v0/b/vue-auto.appspot.com/o/golf%2F04_640x480.jpeg?alt=media&token=5282f46d-b297-4e11-a5c9-bd141546b057",
      960: "https://firebasestorage.googleapis.com/v0/b/vue-auto.appspot.com/o/golf%2F04_960x720.jpeg?alt=media&token=cf10bb57-dbeb-4955-893d-025f572f0701",
      1280: "https://firebasestorage.googleapis.com/v0/b/vue-auto.appspot.com/o/golf%2F04_1280x960.jpeg?alt=media&token=465d1a0b-196e-4a79-aa22-eae254a16353",
      1600: "https://firebasestorage.googleapis.com/v0/b/vue-auto.appspot.com/o/golf%2F04_1600x1200.jpeg?alt=media&token=a223345b-426c-497b-bf9e-375f0795d833",
      1920: "https://firebasestorage.googleapis.com/v0/b/vue-auto.appspot.com/o/golf%2F04_1920x1440.jpeg?alt=media&token=0055ea75-dc78-45ae-bc92-172fca9b5e5d",
    },
    {
      320: "https://firebasestorage.googleapis.com/v0/b/vue-auto.appspot.com/o/golf%2F05_320x240.jpeg?alt=media&token=272dc6ff-7210-4faf-ab33-cb593ee9c8ce",
      640: "https://firebasestorage.googleapis.com/v0/b/vue-auto.appspot.com/o/golf%2F05_640x480.jpeg?alt=media&token=c56ad0a2-3f71-47a0-ad0c-3ff2998569f3",
      960: "https://firebasestorage.googleapis.com/v0/b/vue-auto.appspot.com/o/golf%2F05_960x720.jpeg?alt=media&token=5faeedb3-4fd1-46c8-93ab-09b077d61c03",
      1280: "https://firebasestorage.googleapis.com/v0/b/vue-auto.appspot.com/o/golf%2F05_1280x960.jpeg?alt=media&token=7a4770cb-dec4-4044-8af2-4fcd9dfd46cf",
      1600: "https://firebasestorage.googleapis.com/v0/b/vue-auto.appspot.com/o/golf%2F05_1600x1200.jpeg?alt=media&token=9763f731-2839-4c72-bce9-f97369d0eb87",
      1920: "https://firebasestorage.googleapis.com/v0/b/vue-auto.appspot.com/o/golf%2F05_1920x1440.jpeg?alt=media&token=04650072-e219-4c01-9814-eba9dfe08311",
    },
    {
      320: "https://firebasestorage.googleapis.com/v0/b/vue-auto.appspot.com/o/golf%2F06_320x240.jpeg?alt=media&token=907f09ce-4ab5-4a9d-b725-12ce37194484",
      640: "https://firebasestorage.googleapis.com/v0/b/vue-auto.appspot.com/o/golf%2F06_640x480.jpeg?alt=media&token=b458886e-fddb-4a32-ae9e-5d30a69c1756",
      960: "https://firebasestorage.googleapis.com/v0/b/vue-auto.appspot.com/o/golf%2F06_960x720.jpeg?alt=media&token=97125881-7765-4b9c-a41a-efa0f08614d3",
      1280: "https://firebasestorage.googleapis.com/v0/b/vue-auto.appspot.com/o/golf%2F06_1280x960.jpeg?alt=media&token=06a67b9d-2e70-4f04-9db0-83e5001f1e14",
      1600: "https://firebasestorage.googleapis.com/v0/b/vue-auto.appspot.com/o/golf%2F06_1600x1200.jpeg?alt=media&token=90c8ab7c-dc8c-40ef-9ac1-100a51887c72",
      1920: "https://firebasestorage.googleapis.com/v0/b/vue-auto.appspot.com/o/golf%2F06_1920x1440.jpeg?alt=media&token=a7845c2d-8134-4dd8-9f13-7c59f11612d0",
    },
  ],
];

const getCars = () => {
  const localPhotos = photos.slice();

  return new Array(20).fill(null).map(() => {
    const photoSrc = localPhotos.length
      ? f.random.arrayElement(localPhotos)
      : new Array(5).fill(null).map(() => ({
          320: `https://via.placeholder.com/320x240.webp/${f.internet
            .color()
            .slice(1)}/${f.internet.color().slice(1)}`,
          640: `https://via.placeholder.com/640x480.webp/${f.internet
            .color()
            .slice(1)}/${f.internet.color().slice(1)}`,
          960: `https://via.placeholder.com/960x720.webp/${f.internet
            .color()
            .slice(1)}/${f.internet.color().slice(1)}`,
          1280: `https://via.placeholder.com/1280x960.webp/${f.internet
            .color()
            .slice(1)}/${f.internet.color().slice(1)}`,
          1600: `https://via.placeholder.com/1600x1200.webp/${f.internet
            .color()
            .slice(1)}/${f.internet.color().slice(1)}`,
          1920: `https://via.placeholder.com/1920x1440.webp/${f.internet
            .color()
            .slice(1)}/${f.internet.color().slice(1)}`,
        }));
    const usedIndex = localPhotos.indexOf(photoSrc);
    localPhotos.splice(usedIndex, 1);
    const ownerType = f.random.arrayElement(["business", "person"]);
    const ownerName =
      ownerType === "business" ? f.company.companyName() : f.name.firstName();

    return {
      id: f.random.uuid(),
      brand: f.vehicle.manufacturer(),
      model: f.vehicle.model(),
      type: f.vehicle.type(),
      fuel: f.vehicle.fuel(),
      color: f.vehicle.color(),
      image: `https://via.placeholder.com/320x240.webp/${f.internet
        .color()
        .slice(1)}/${f.internet.color().slice(1)}`,
      images: photoSrc,
      mileage: f.random.number({
        min: 0,
        max: 500000,
      }),
      gearbox: f.random.arrayElement(["Automatic", "Manual"]),
      year: f.random.number({
        min: 1980,
        max: 2020,
      }),
      month: f.random.number({
        min: 0,
        max: 11,
      }),
      price: f.random.number({
        min: 500,
        max: 50000,
      }),
      power: f.random.number({
        min: 50,
        max: 500,
      }),
      city: f.address.city(),
      registeredTill: f.date.future(1),
      drivetrain: f.random.arrayElement(["FWD", "RWD", "AWD"]),
      ownerType,
      ownerName,
    };
  });
};

const generateMakes = (count: number) =>
  new Array(count)
    .fill(null)
    .map(() => f.vehicle.manufacturer())
    .sort();
const uniqueMakes = (makes: string[]) => [...new Set(makes)];

const generateModels = (count: number) =>
  new Array(count)
    .fill(null)
    .map(() => f.vehicle.model())
    .sort();
const uniqueModels = (models: string[]) => [...new Set(models)];

const makes = uniqueMakes(generateMakes(500));
const makeModels = makes.map((make) => ({
  make,
  models: uniqueModels(
    generateModels(
      f.random.number({
        min: 1,
        max: 10,
      })
    )
  ),
}));

export { getCars, makeModels };
