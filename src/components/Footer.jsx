import { Box, Flex, Text } from "@chakra-ui/react";
import React from "react";

function Footer() {
    return (
        <Box height="500px">
            <Flex align="center" justify="center" mt="15%">
                <Text
                    fontSize="md"
                    fontFamily={"Neue-Helvetica, Helvetica, Arial, sans-serif"}
                >
                    THAM GIA BẢN TIN CỦA CHÚNG TÔI
                </Text>
            </Flex>

            <Box>
                <Flex
                    align="center"
                    gap={"5px"}
                    justify="center"
                    mt="10%"
                    fontFamily={"Neue-Helvetica, Helvetica, Arial, sans-serif"}
                >
                    <Box p="2%">
                        <Text
                            fontSize="sm"
                            fontWeight={300}
                            onClick={() =>
                                (window.location.href =
                                    "https://www.instagram.com/zara/")
                            }
                            cursor={"pointer"}
                        >
                            INSTAGRAM
                        </Text>
                    </Box>
                    <Box p="2%">
                        <Text
                            fontSize="sm"
                            fontWeight={300}
                            onClick={() =>
                                (window.location.href =
                                    "https://twitter.com/ZARA")
                            }
                            cursor={"pointer"}
                        >
                            TWITTER
                        </Text>
                    </Box>
                    <Box p="2%">
                        <Text
                            fontSize="sm"
                            fontWeight={300}
                            onClick={() =>
                                (window.location.href =
                                    "https://www.facebook.com/Zara")
                            }
                            cursor={"pointer"}
                        >
                            FACEBOOK
                        </Text>
                    </Box>
                    <Box p="2%">
                        <Text
                            fontSize="sm"
                            fontWeight={300}
                            onClick={() =>
                                (window.location.href =
                                    "https://es.pinterest.com/zaraofficial")
                            }
                        >
                            PINTEREST
                        </Text>
                    </Box>
                    <Box p="2%">
                        <Text
                            fontSize="sm"
                            fontWeight={300}
                            onClick={() =>
                                (window.location.href =
                                    "http://www.youtube.com/user/zara")
                            }
                        >
                            YOUTUBE
                        </Text>
                    </Box>
                    <Box p="2%">
                        <Text
                            fontSize="sm"
                            fontWeight={300}
                            cursor={"pointer"}
                            onClick={() =>
                                (window.location.href =
                                    "https://open.spotify.com/user/r6ivwuv0ebk346hhxo446pbfv")
                            }
                        >
                            SPOTIFY
                        </Text>
                    </Box>
                </Flex>
            </Box>

            <Box>
                <Flex
                    align="center"
                    gap={"5px"}
                    justify="center"
                    mt="10%"
                    fontFamily={"Neue-Helvetica, Helvetica, Arial, sans-serif"}
                >
                    <Box p="2%">
                        <Text
                            fontSize="sm"
                            fontWeight={300}
                            onClick={() =>
                                (window.location.href =
                                    "https://www.instagram.com/zara/")
                            }
                            cursor={"pointer"}
                        >
                            CÀI ĐẶT COOKIE
                        </Text>
                    </Box>
                    <Box p="2%">
                        <Text
                            fontSize="sm"
                            fontWeight={300}
                            onClick={() =>
                                (window.location.href =
                                    "https://twitter.com/ZARA")
                            }
                            cursor={"pointer"}
                        >
                            CHÍNH SÁCH VỀ QUYỀN RIÊNG TƯ VÀ COOKIE
                        </Text>
                    </Box>
                    <Box p="2%">
                        <Text
                            fontSize="sm"
                            fontWeight={300}
                            onClick={() =>
                                (window.location.href =
                                    "https://www.facebook.com/Zara")
                            }
                            cursor={"pointer"}
                        >
                            ĐIỀU KHOẢN SỬ DỤNG
                        </Text>
                    </Box>
                    <Box p="2%">
                        <Text
                            fontSize="sm"
                            fontWeight={300}
                            onClick={() =>
                                (window.location.href =
                                    "https://es.pinterest.com/zaraofficial")
                            }
                        >
                            THÔNG TIN VỀ CHÚNG TÔI
                        </Text>
                    </Box>
                    <Box p="2%">
                        <Text
                            fontSize="sm"
                            fontWeight={300}
                            onClick={() =>
                                (window.location.href =
                                    "http://www.youtube.com/user/zara")
                            }
                        >
                            LIÊN HỆ
                        </Text>
                    </Box>
                </Flex>
            </Box>
        </Box>
    );
}

export default Footer;
