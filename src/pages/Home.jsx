import { Box, Button, Flex } from "@chakra-ui/react";
import React, { useState } from "react";
import Footer from "../components/Footer";
import { ChevronLeftIcon, ChevronRightIcon } from "@chakra-ui/icons";

let Women = {
    image1: "https://static.zara.net/photos///contents/mkt/spots/ss23-north-woman-new/subhome-xmedia-16-5//w/1920/IMAGE-landscape-fill-457fd67f-0b2c-4425-b027-3922ad555224-default_0.jpg?ts=1682076337231",
    video: "Video/video-asia.mp4",
    image2: "https://static.zara.net/photos///contents/mkt/spots/ss23-north-woman-holiday-edit/subhome-xmedia-17//w/1920/IMAGE-landscape-fill-102ea938-2a28-40ae-ae27-f72500191361-default_0.jpg?ts=1682326850164",
    image3: "https://static.zara.net/photos///contents/mkt/spots/ss23-north-woman-knitwear/subhome-xmedia-17//w/1920/IMAGE-landscape-default-fill-8b208cc5-b4c3-4034-ba76-2731079f1020-default_0.jpg?ts=1682327253059",
    image4: "https://static.zara.net/photos///contents/mkt/spots/ss23-north-woman-party/subhome-xmedia-16//w/1920/IMAGE-landscape-fill-c86f6aee-2ffa-4994-81cc-fadbb71f5bb4-default_0.jpg?ts=1682076532126",
    image5: "https://static.zara.net/photos///contents/mkt/spots/ss23-north-woman-dresses/subhome-xmedia-16-3//w/1920/IMAGE-landscape-fill-f5d70925-a515-4b30-8c7b-adb290e02a0f-default_0.jpg?ts=1682077759622",
};

let Men = {
    image1: "https://static.zara.net/photos///contents/mkt/spots/ss23-north-man-new/subhome-xmedia-17//w/1920/IMAGE-landscape-fill-e2befde9-8901-4fb0-a42b-c5e9d2a34cd0-default_0.jpg?ts=1682349705439",
    video2: "Video/Winter.mp4",
    image2: "https://static.zara.net/photos///contents/mkt/spots/aw22-north-man-new/subhome-xmedia-49//w/1920/IMAGE-landscape-fill-26580743-41eb-4586-859d-09e81a25b1be-default_0.jpg?ts=1670421023459",
    image3: "https://static.zara.net/photos///2022/I/M/2/p/0000/004/955/2/w/948/0000004955_15_2_1.jpg?ts=1669139167383",
    image4: "https://static.zara.net/photos///contents/mkt/spots/aw22-north-man-origins/subhome-xmedia-prewarming-drop-iii-winter-launch//w/1920/IMAGE-landscape-default-fill-0d199040-e6b5-4035-b655-c77c8d851b1f-default_0.jpg?ts=1668654637059",
    image5: "https://static.zara.net/photos///contents/mkt/spots/aw22-north-man-origins/subhome-xmedia-prewarming-drop-iii-winter-launch//w/1920/IMAGE-landscape-default-fill-0d199040-e6b5-4035-b655-c77c8d851b1f-default_0.jpg?ts=1668654637059",
};

let Child = {
    video: "Video/video-asia.mp4",
    video: "Video/video-asia.mp4",
    image2: "https://static.zara.net/photos///contents/mkt/spots/aw22-north-kids-babyboy/subhome-xmedia-50//w/1920/IMAGE-landscape-fill-ff966491-7491-4c06-994e-ca71500b4c49-default_0.jpg?ts=1670935725138",
    image3: "https://static.zara.net/photos///contents/mkt/spots/aw22-north-kids-mini/subhome-xmedia-47//w/1920/IMAGE-landscape-fill-a8ada299-8dee-4702-abfa-b0d0040b4192-default_0.jpg?ts=1669384230932",
    image4: "https://static.zara.net/photos///contents/mkt/spots/aw22-joinlife-jeans-redesign/subhome-xmedia-kids//w/1920/IMAGE-landscape-fill-ac5416df-605d-44bf-aac4-d0342fec6014-default_0.jpg?ts=1670951111571",
    image5: "https://static.zara.net/photos///contents/mkt/spots/aw22-joinlife-jeans-redesign/subhome-xmedia-kids//w/1920/IMAGE-landscape-fill-ac5416df-605d-44bf-aac4-d0342fec6014-default_0.jpg?ts=1670951111571",
};
let arr = [Women, Men, Child];

const Home = () => {
    const [ind, setInd] = useState(0);
    return (
        <Box pos="relative">
            <Box>
                <img src={arr[ind].image1} alt="" width="100%" height="100%" />
                <Flex zIndex={2} pos="fixed" top={50} left={1} gap={1000}>
                    <Box>
                        <Button
                            disabled={ind === 0}
                            onClick={() => setInd(ind - 1)}
                            colorScheme="transparent"
                            size="lg"
                            mt={60}
                        >
                            <ChevronLeftIcon w={12} h={10} marginRight="20px" />
                        </Button>
                    </Box>
                    <Box>
                        <Button
                            disabled={ind === 2}
                            onClick={() => setInd(ind + 1)}
                            colorScheme="transparent"
                            size="lg"
                            mt={60}
                        >
                            <ChevronRightIcon
                                w={12}
                                h={10}
                                marginLeft="818px"
                            />
                        </Button>
                    </Box>
                </Flex>
            </Box>

            <Flex gap={30} pos="fixed" top={630} left={490} fontWeight={"bold"}>
                {/* <Text fontSize="sm">ZARA ATHELITIC</Text>
        <Text fontSize="sm">NEW </Text>
        <Text fontSize="sm">PARTY</Text>
        <Text fontSize="sm">SHOES</Text>
        <Text fontSize="sm">EDITION</Text>
        <Text fontSize="sm">ZARA ORIGINS</Text> */}
            </Flex>

            <Box height="1000px">
                <video
                    width="100%"
                    height="100%"
                    autoPlay="autoPlay"
                    loop={true}
                    muted
                >
                    <source src={arr[ind].video} type="video/mp4" />
                </video>
            </Box>
            <Box mt="-10%">
                <img src={arr[ind].image2} alt="" width="100%" height="100%" />
            </Box>
            <Box mt="-10%">
                <img src={arr[ind].image3} alt="" width="100%" height="100%" />
            </Box>
            <Box mt="-10%">
                <img src={arr[ind].image4} alt="" width="100%" height="100%" />
            </Box>
            <Footer />
        </Box>
    );
};

export default Home;
