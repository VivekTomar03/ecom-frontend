import React, { useEffect, useRef, useState } from "react";
import {
  Input,
  Checkbox,
  CheckboxGroup,
  VStack,
  Card,
  CardBody,
  CardHeader,
  Heading,
  Flex,
  Text,
  InputGroup,
  InputLeftElement,
  RadioGroup,
  Stack,
  Radio,
  Box,
  SliderMark,
  SliderTrack,
  SliderFilledTrack,
  SliderThumb,
  Slider,
  useDisclosure,
  Button,
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  DrawerHeader,
  DrawerBody,
  DrawerFooter,
  IconButton,
} from "@chakra-ui/react";
import { HamburgerIcon, SearchIcon } from "@chakra-ui/icons";
import { useNavigate, useSearchParams } from "react-router-dom";
function WomenslistSidebar({ setSearchTerm, searchTerm , catType }) {
  const [searchParams, setsearchParam] = useSearchParams();
  const [category, setCategory] = useState("");
  const navigate = useNavigate();
  const [brand, setBrand] = useState(searchParams.getAll("brand") || "");
  const [minprice, setminPrice] = useState(
    searchParams.getAll("minPrice") || []
  );
  const [maxPrice, setMaxPrice] = useState(
    searchParams.getAll("maxPrice") || []
  );
  const [sliderValue, setSliderValue] = useState(
    searchParams.getAll("maxDiscountPercentage") || 0
  );
  const { isOpen, onOpen, onClose } = useDisclosure()
  const btnRef = useRef()
  const handleBrandChnage = (e) => {
    let value = e.target.value;
    let newBrand = [...brand];
    if (newBrand.includes(value)) {
      newBrand = newBrand.filter((el) => el !== value);
    } else {
      newBrand.push(value);
    }
    setBrand(newBrand);
  };
  const handlePriceChange = (e) => {
    let value = e.target.value.split(",").map(Number);

    let newMinPrice = [...minprice];
    if (newMinPrice.includes(value[0])) {
      newMinPrice = newMinPrice.filter((el) => el !== value[0]);
    } else {
      newMinPrice.push(value[0]);
    }

    let newMaxPrice = [...maxPrice];
    if (newMaxPrice.includes(value[1])) {
      newMaxPrice = newMaxPrice.filter((el) => el !== value[1]);
    } else {
      newMaxPrice.push(value[1]);
    }

    setminPrice(newMinPrice);
    setMaxPrice(newMaxPrice);
  };

  const handleClearAll = () => {
    setBrand([]);
    setminPrice([]);
    setMaxPrice([]);
    setSliderValue(0);
    searchParams.delete("brand");
    searchParams.delete("minPrice");
    searchParams.delete("maxPrice");
    searchParams.delete("maxDiscountPercentage");
  };

  useEffect(() => {
    let obj = {
      limit: 9,
      page: 1,
    };
    if (brand) {
      obj.brand = brand;
    } else {
      delete obj.brand;
    }
    if (minprice) {
      obj.minPrice = minprice;
    }
    if (maxPrice) {
      obj.maxPrice = maxPrice;
    }
    if (sliderValue) obj.maxDiscountPercentage = sliderValue;
    setsearchParam(obj);
  }, [brand, minprice, maxPrice, sliderValue , setSearchTerm]);

  useEffect(() => {
    if (category === "womens") navigate("/womens");
    if (category === "mens") navigate("/mens");
    if (category === "kids") navigate("/kids");
  }, [category]);
  useEffect(() => {
    window.scroll(0, 0);
  }, []);



  return (
   <>
     <Card
      w="45%"
      h="fit-content"
      borderWidth="1px"
      borderRadius="lg"
      overflow="hidden"
      // boxShadow="lg"
      bg="white"
      // p="6"
      _hover={{ boxShadow: "xl", transform: "scale(1.01)" }}
      transition="all 0.3s ease"
      display={{base:"none", sm:"none" , md:"none", lg:"block"}}
    >
      <CardHeader display={"flex"} justifyContent={"space-between"}>
        <Heading size={"sm"}>FILTERS</Heading>
        <Text
          onClick={handleClearAll}
          cursor={"pointer"}
          fontSize="sm"
          mb="4"
          fontWeight="bold"
          color={"brown"}
        >
          Clear All
        </Text>
      </CardHeader>
      <CardBody as={Flex} gap={3} flexDir={"column"} alignItems={"flex-start"}>
        <InputGroup boxShadow="md">
          <Input
            placeholder="Search Products"
            type="text"
            focusBorderColor="teal.500"
            borderColor="gray.300"
            _hover={{ borderColor: "gray.400" }}
            _placeholder={{ color: "gray.500" }}
            borderRadius="md"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <InputLeftElement
            pointerEvents="none"
            children={<SearchIcon color="gray.300" />}
          />
        </InputGroup>

        <Box
          boxShadow="md"
          width="100%"
          mt="20px"
          p="5"
          borderWidth="1px"
          borderRadius="md"
        >
          <Text fontSize="lg" mb="4" fontWeight="bold">
            Category
          </Text>
          <RadioGroup onChange={setCategory} defaultValue={catType ==="womens" ? "womens" : catType==="mens" ?"mens" :"kids"}>
            <VStack align="start" spacing="4">
              <Radio value="womens" colorScheme="teal">
                Womens
              </Radio>
              <Radio value="mens" colorScheme="teal">
                Mens
              </Radio>
              <Radio value="kids" colorScheme="teal">
                Kids
              </Radio>
            </VStack>
          </RadioGroup>
        </Box>

        <Box
          width="100%"
          mt="20px"
          p="5"
          borderWidth="1px"
          borderRadius="md"
          boxShadow="md"
        >
          <Text fontSize="lg" mb="4" fontWeight="bold">
            Brands
          </Text>
           {catType ==="womens" &&  <VStack align="start" spacing="3">
            <Checkbox
              onChange={handleBrandChnage}
              isChecked={brand.includes("Radha Rani creation")}
              value="Radha Rani creation"
              colorScheme="teal"
            >
              Radha Rani
            </Checkbox>
            <Checkbox
              onChange={handleBrandChnage}
              value="Make my cloth"
              colorScheme="teal"
              isChecked={brand.includes("Make my cloth")}
            >
              Make my Clothi
            </Checkbox>
            <Checkbox
              onChange={handleBrandChnage}
              value="Rimeline"
              isChecked={brand.includes("Rimeline")}
              colorScheme="teal"
            >
              Rimeline
            </Checkbox>
          </VStack>}

          {catType ==="mens" &&  <VStack align="start" spacing="3">
            <Checkbox
              onChange={handleBrandChnage}
              isChecked={brand.includes("Raymond")}
              value="Raymond"
              colorScheme="teal"
            >
              Raymond
            </Checkbox>
            <Checkbox
              onChange={handleBrandChnage}
              value="3SIX5"
              colorScheme="teal"
              isChecked={brand.includes("3SIX5")}
            >
             3SIX5
            </Checkbox>
            <Checkbox
              onChange={handleBrandChnage}
              value="Babastore"
              isChecked={brand.includes("Babastore")}
              colorScheme="teal"
            >
              Babastore
            </Checkbox>
          </VStack>}
        </Box>

        <Box
          width="100%"
          mt="20px"
          p="5"
          borderWidth="1px"
          borderRadius="md"
          boxShadow="md"
        >
          <Text fontSize="lg" mb="4" fontWeight="bold">
            Price Range
          </Text>
          <VStack align="start" spacing="3">
            <Checkbox
              isChecked={minprice.includes(34) && maxPrice.includes(200)}
              onChange={handlePriceChange}
              value={"34,200"}
              colorScheme="teal"
              size="sm"
            >
              Rs 34 to Rs 200
            </Checkbox>
            <Checkbox
              isChecked={minprice.includes(200) && maxPrice.includes(800)}
              onChange={handlePriceChange}
              value={"200,800"}
              colorScheme="teal"
              size="sm"
            >
              Rs 200 to Rs 800
            </Checkbox>
            <Checkbox
              isChecked={minprice.includes(800) && maxPrice.includes(2000)}
              onChange={handlePriceChange}
              value={"800,2000"}
              colorScheme="teal"
              size="sm"
            >
              Rs 800 to Rs 2000
            </Checkbox>
            <Checkbox
              isChecked={minprice.includes(2000) && maxPrice.includes(4000)}
              onChange={handlePriceChange}
              value={"2000,4000"}
              colorScheme="teal"
              size="sm"
            >
              Rs 2000 to Rs 4000
            </Checkbox>
            <Checkbox
              isChecked={minprice.includes(4000) && maxPrice.includes(6000)}
              onChange={handlePriceChange}
              value={"4000,6000"}
              colorScheme="teal"
              size="sm"
            >
              Rs 4000 to Rs 6000
            </Checkbox>
            <Checkbox
              isChecked={minprice.includes(6000) && maxPrice.includes(9000)}
              onChange={handlePriceChange}
              value={"6000,9000"}
              colorScheme="teal"
              size="sm"
            >
              Rs 6000 to Rs 9000
            </Checkbox>
          </VStack>
        </Box>

        <Box
          width="100%"
          mt="20px"
          p="5"
          borderWidth="1px"
          borderRadius="md"
          boxShadow="md"
        >
          <Flex justifyContent={"space-between"} alignItems={"center"}>
            <Text fontSize="lg" mb="4" fontWeight="bold">
              Discount
            </Text>
            <Text
              onClick={() => setSliderValue(0)}
              cursor={"pointer"}
              fontSize="sm"
              mb="4"
              fontWeight="bold"
              color={"brown"}
            >
              Clear
            </Text>
          </Flex>
          <Box px="2">
            <Slider
              defaultValue={50}
              min={0}
              max={100}
              step={1}
              value={sliderValue}
              onChange={(val) => setSliderValue(val)}
              colorScheme="teal"
            >
              <SliderMark value={0} mt="1" ml="-2.5" fontSize="sm">
                0%
              </SliderMark>
              <SliderMark value={25} mt="1" ml="-2.5" fontSize="sm">
                25%
              </SliderMark>
              <SliderMark value={50} mt="1" ml="-2.5" fontSize="sm">
                50%
              </SliderMark>
              <SliderMark value={75} mt="1" ml="-2.5" fontSize="sm">
                75%
              </SliderMark>
              <SliderMark value={100} mt="1" ml="-2.5" fontSize="sm">
                100%
              </SliderMark>
              <SliderTrack>
                <SliderFilledTrack />
              </SliderTrack>
              <SliderThumb boxSize={6}>
                <Box color="teal.500" as="span">
                  {sliderValue}%
                </Box>
              </SliderThumb>
            </Slider>
          </Box>
        </Box>
      </CardBody>
    </Card>
    <IconButton
      display={{ base: "block", sm: "block", md: "block", lg: "none" }}
      ref={btnRef}
      bg="#FF527B"
      onClick={onOpen}
      icon={<HamburgerIcon color={"white"}/>}
      aria-label="Open sidebar"
      size="lg"
      variant="solid"
      boxShadow="md"
      _hover={{ bg: '#FF527B' }}
      _active={{ bg: '#FF527B', transform: 'scale(0.95)' }}
     w={"fit-content"}
     h={"fit-content"}
     pt={2}
     pb={2}
     alignItems={"center"}
     transition={isOpen? "ease-out" : "ease-in"}
    />
<Drawer
 display={{base:"none", sm:"none" , md:"none", lg:"block"}}
        isOpen={isOpen}
        placement='left'
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay/>
        <DrawerContent>
          <DrawerCloseButton mb={5}/>
     

          <DrawerBody mt={6}>
          <Card
      w="100%"
    
      h="fit-content"
     
      overflow="hidden"
      // boxShadow="lg"
      bg="white"
      // p="6"
      _hover={{ boxShadow: "xl", transform: "scale(1.01)" }}
      transition="all 0.3s ease"
     
    >
      <CardHeader display={"flex"} justifyContent={"space-between"}>
        <Heading size={"sm"}>FILTERS</Heading>
        <Text
          onClick={handleClearAll}
          cursor={"pointer"}
          fontSize="sm"
          mb="4"
          fontWeight="bold"
          color={"brown"}
        >
          Clear All
        </Text>
      </CardHeader>
      <CardBody as={Flex} gap={3} flexDir={"column"} alignItems={"flex-start"}>
        <InputGroup boxShadow="md">
          <Input
            placeholder="Search Products"
            type="text"
            focusBorderColor="teal.500"
            borderColor="gray.300"
            _hover={{ borderColor: "gray.400" }}
            _placeholder={{ color: "gray.500" }}
            borderRadius="md"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <InputLeftElement
            pointerEvents="none"
            children={<SearchIcon color="gray.300" />}
          />
        </InputGroup>

        <Box
          boxShadow="md"
          width="100%"
          mt="20px"
          p="5"
          borderWidth="1px"
          borderRadius="md"
        >
          <Text fontSize="lg" mb="4" fontWeight="bold">
            Category
          </Text>
          <RadioGroup onChange={setCategory} defaultValue="womens">
            <VStack align="start" spacing="4">
              <Radio value="womens" colorScheme="teal">
                Womens
              </Radio>
              <Radio value="mens" colorScheme="teal">
                Mens
              </Radio>
              <Radio value="kids" colorScheme="teal">
                Kids
              </Radio>
            </VStack>
          </RadioGroup>
        </Box>

        <Box
          width="100%"
          mt="20px"
          p="5"
          borderWidth="1px"
          borderRadius="md"
          boxShadow="md"
        >
          <Text fontSize="lg" mb="4" fontWeight="bold">
            Brands
          </Text>
          <VStack align="start" spacing="3">
            <Checkbox
              onChange={handleBrandChnage}
              isChecked={brand.includes("Radha Rani creation")}
              value="Radha Rani creation"
              colorScheme="teal"
            >
              Radha Rani
            </Checkbox>
            <Checkbox
              onChange={handleBrandChnage}
              value="Make my cloth"
              colorScheme="teal"
              isChecked={brand.includes("Make my cloth")}
            >
              Make my Clothi
            </Checkbox>
            <Checkbox
              onChange={handleBrandChnage}
              value="Rimeline"
              isChecked={brand.includes("Rimeline")}
              colorScheme="teal"
            >
              Rimeline
            </Checkbox>
          </VStack>
        </Box>

        <Box
          width="100%"
          mt="20px"
          p="5"
          borderWidth="1px"
          borderRadius="md"
          boxShadow="md"
        >
          <Text fontSize="lg" mb="4" fontWeight="bold">
            Price Range
          </Text>
          <VStack align="start" spacing="3">
            <Checkbox
              isChecked={minprice.includes(34) && maxPrice.includes(200)}
              onChange={handlePriceChange}
              value={"34,200"}
              colorScheme="teal"
              size="sm"
            >
              Rs 34 to Rs 200
            </Checkbox>
            <Checkbox
              isChecked={minprice.includes(200) && maxPrice.includes(800)}
              onChange={handlePriceChange}
              value={"200,800"}
              colorScheme="teal"
              size="sm"
            >
              Rs 200 to Rs 800
            </Checkbox>
            <Checkbox
              isChecked={minprice.includes(800) && maxPrice.includes(2000)}
              onChange={handlePriceChange}
              value={"800,2000"}
              colorScheme="teal"
              size="sm"
            >
              Rs 800 to Rs 2000
            </Checkbox>
            <Checkbox
              isChecked={minprice.includes(2000) && maxPrice.includes(4000)}
              onChange={handlePriceChange}
              value={"2000,4000"}
              colorScheme="teal"
              size="sm"
            >
              Rs 2000 to Rs 4000
            </Checkbox>
            <Checkbox
              isChecked={minprice.includes(4000) && maxPrice.includes(6000)}
              onChange={handlePriceChange}
              value={"4000,6000"}
              colorScheme="teal"
              size="sm"
            >
              Rs 4000 to Rs 6000
            </Checkbox>
            <Checkbox
              isChecked={minprice.includes(6000) && maxPrice.includes(9000)}
              onChange={handlePriceChange}
              value={"6000,9000"}
              colorScheme="teal"
              size="sm"
            >
              Rs 6000 to Rs 9000
            </Checkbox>
          </VStack>
        </Box>

        <Box
          width="100%"
          mt="20px"
          p="5"
          borderWidth="1px"
          borderRadius="md"
          boxShadow="md"
        >
          <Flex justifyContent={"space-between"} alignItems={"center"}>
            <Text fontSize="lg" mb="4" fontWeight="bold">
              Discount
            </Text>
            <Text
              onClick={() => setSliderValue(0)}
              cursor={"pointer"}
              fontSize="sm"
              mb="4"
              fontWeight="bold"
              color={"brown"}
            >
              Clear
            </Text>
          </Flex>
          <Box px="2">
            <Slider
              defaultValue={50}
              min={0}
              max={100}
              step={1}
              value={sliderValue}
              onChange={(val) => setSliderValue(val)}
              colorScheme="teal"
            >
              <SliderMark value={0} mt="1" ml="-2.5" fontSize="sm">
                0%
              </SliderMark>
              <SliderMark value={25} mt="1" ml="-2.5" fontSize="sm">
                25%
              </SliderMark>
              <SliderMark value={50} mt="1" ml="-2.5" fontSize="sm">
                50%
              </SliderMark>
              <SliderMark value={75} mt="1" ml="-2.5" fontSize="sm">
                75%
              </SliderMark>
              <SliderMark value={100} mt="1" ml="-2.5" fontSize="sm">
                100%
              </SliderMark>
              <SliderTrack>
                <SliderFilledTrack />
              </SliderTrack>
              <SliderThumb boxSize={6}>
                <Box color="teal.500" as="span">
                  {sliderValue}%
                </Box>
              </SliderThumb>
            </Slider>
          </Box>
        </Box>
      </CardBody>
    </Card>
          </DrawerBody>

          {/* <DrawerFooter>
            <Button variant='outline' mr={3} onClick={onClose}>
              Cancel
            </Button>
            <Button colorScheme='blue'>Save</Button>
          </DrawerFooter> */}
        </DrawerContent>
      </Drawer>
   </>
  );
}

export default WomenslistSidebar;
