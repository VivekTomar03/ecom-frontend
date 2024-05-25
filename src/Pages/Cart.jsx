// Cart.js
import React, { useEffect, useState } from 'react';
import { Badge, Box, Button, Divider, Flex, FormControl, HStack, Image, Input, Radio, RadioGroup, Select, Spinner, Stack, Text, VStack, useToast } from '@chakra-ui/react';
import { getUserDataFromCookiesdata } from '../Components/GetUserCookiesdata';
import { useReqmoveCartItemMutation } from '../Redux/service/productsService/userAuth';
import { useNavigate } from 'react-router-dom';

const Cart = () => {
  const [step, setStep] = useState(1);
  const [paymentMethod, setPaymentMethod] = useState('');
  const userDataLogin = getUserDataFromCookiesdata()
  const [reqmoveCartItem, {data}] = useReqmoveCartItemMutation()
  const navigate = useNavigate()
// const {cart} = userDataLogin



  const handleNextStep = () => {
    setStep(step + 1);
  };

  const handlePayment = async () => {
    setStep(step + 1);
 let res = await reqmoveCartItem(userDataLogin?.cart);
document.cookie = `userDataLogin=${JSON.stringify(res?.data)}; path=/`;

    setTimeout(() => {
      // Navigate to home after 3 seconds
      // window.location.href = '/';
      navigate("/")
    }, 3000);
  };


  const [summary, setSummary] = useState({
    totalMRP: 0,
    totalDiscount: 0,
    couponDiscount: 0,
    platformFee: 20,
    shippingFee: 0,
    totalAmount: 0,
  });
  const [coupon, setCoupon] = useState('');
  const [quantity, setQuantity] = useState(1);
  const toast = useToast();

  useEffect(() => {
    calculateSummary();
  }, [ quantity, coupon]);

  const calculateSummary = () => {
    let totalMRP = 0;
    let totalDiscount = 0;

    userDataLogin?.cart?.forEach((item) => {
      totalMRP += item.price1 * quantity;
      totalDiscount += (item.price1 - item.price2) * quantity;
    });

    const couponDiscount = coupon === 'ecom10' ? totalMRP * 0.1 : 0;
    const totalAmount = totalMRP - totalDiscount - couponDiscount + summary.platformFee + summary.shippingFee;

    setSummary({
      totalMRP,
      totalDiscount,
      couponDiscount,
      platformFee: summary.platformFee,
      shippingFee: summary.shippingFee,
      totalAmount,
    });
  };

  const handleCouponApply = () => {
    if (coupon !== 'ecom10') {
      toast({
        title: 'Invalid coupon code.',
        status: 'error',
        duration: 2000,
        isClosable: true,
      });
    }
    else{
      toast({
        title: 'coupon code  applied successfully.',
        status: 'success',
        duration: 2000,
        isClosable: true,
      });
      setCoupon("")
    }
    calculateSummary();
  };

  const handleQuantityChange = (e) => {
    setQuantity(parseInt(e.target.value, 10));
  };
  return (
   <Box>
     <Box p={4}>
    { step === 1 && 
      <Flex p={5} gap={10} mt={{ base: '10rem', md: '10rem' }} flexDirection={{ base: 'column', lg: 'row' }}>
      <Flex flexDir="column" w={{ base: '100%', lg: '60%' }}>
        {userDataLogin?.cart?.map((el, index) => (
          <Flex key={index} gap={3} p={5} borderWidth="1px" borderRadius="lg" mb={4} flexDirection={{ base: 'column', md: 'row' }}>
            <Image src={el._image} alt={el.title} boxSize="150px" objectFit="cover" />
            <Flex flexDirection="column" flex="1">
              <Text fontWeight="bold">{el.brand}</Text>
              <Text>{el.title}</Text>
              <HStack wrap="wrap" spacing={2}>
                  {el?.size?.split(',').map((size, index) => (
                    <Button
                      key={index}
                      variant="outline"
                      size="sm"
                      borderRadius="full"
                      colorScheme="teal"
                      _hover={{ bg: 'teal.500', color: 'white' }}
                      _focus={{ boxShadow: 'outline' }}
                    >
                      {size}
                    </Button>
                  ))}
                </HStack>
              <Flex alignItems="center" mt={2} gap={2}>
                <Text>QTY</Text>
                <Select value={quantity} onChange={handleQuantityChange} maxW="70px">
                  {[...Array(10).keys()].map((num) => (
                    <option key={num + 1} value={num + 1}>
                      {num + 1}
                    </option>
                  ))}
                </Select>
              </Flex>
              <HStack spacing={2} alignItems="center" mt={2}>
                <Text fontWeight="bold">{"RS " + el.price2}</Text>
                <Text textDecor="line-through" color="gray.500">{"RS " + el.price1}</Text>
                <Badge colorScheme="pink">{el.discount}</Badge>
              </HStack>
              <Text mt={2}>14 days return available</Text>
              <Text>Express delivery in 3 days</Text>
            </Flex>
          </Flex>
        ))}
      </Flex>
      <Flex flexDir="column" w={{ base: '100%', lg: '40%' }}>
        <Box p={5} borderWidth="1px" borderRadius="lg" mb={4}>
          <Text fontWeight="bold" mb={2}>Apply Coupons</Text>
          <Flex gap={2}>
            <Input value={coupon} onChange={(e) => setCoupon(e.target.value)} placeholder="Enter coupon code" />
            <Button colorScheme="teal" onClick={handleCouponApply}>
              Apply
            </Button>
          </Flex>
        </Box>
        <Box p={5} borderWidth="1px" borderRadius="lg">
          <Text fontWeight="bold" mb={2}>Price Details</Text>
          <Flex justifyContent="space-between">
            <Text>Total MRP</Text>
            <Text>{"RS " + summary.totalMRP}</Text>
          </Flex>
          <Flex justifyContent="space-between">
            <Text>Discount</Text>
            <Text>-{"RS " + summary.totalDiscount}</Text>
          </Flex>
          <Flex justifyContent="space-between">
            <Text>Coupon Discount</Text>
            <Text>-{"RS " + summary.couponDiscount}</Text>
          </Flex>
          <Flex justifyContent="space-between">
            <Text>Platform Fee</Text>
            <Text>{"RS " + summary.platformFee}</Text>
          </Flex>
          <Flex justifyContent="space-between">
            <Text>Shipping Fee</Text>
            <Text>{summary.shippingFee === 0 ? "Free" : "RS " + summary.shippingFee}</Text>
          </Flex>
          <Divider my={3} />
          <Flex justifyContent="space-between" fontWeight="bold">
            <Text>Total Amount</Text>
            <Text>{"RS " + Math.floor(summary.totalAmount)}</Text>
          </Flex>
          <Button colorScheme="teal" mt={4} w="full" onClick={handleNextStep}>
            Continue
          </Button>
        </Box>
      </Flex>
    </Flex>
}
     
<Box p={5}>
      {step === 2 && (
        <Flex
          gap={10}
          mt={{ base: '2rem', md: '10rem' }}
          flexDirection={{ base: 'column', lg: 'row' }}
          justifyContent="space-between"
        >
          <Box flex="1"  p={5} borderWidth="1px" borderRadius="lg" boxShadow="lg">
            <Text fontSize="2xl" mb={4} fontWeight="bold" textAlign="center">
              Delivery Address
            </Text>
            <Box mb={4} p={5} borderWidth="1px" borderRadius="lg" boxShadow="lg">
              <Text fontSize="md" color="gray.600">
                1234 Chakra UI Street
              </Text>
              <Text fontSize="md" color="gray.600">
                React City, JS 12345
              </Text>
            </Box>
            <Button colorScheme="teal" w="full" onClick={handleNextStep}>
              Proceed to Payment
            </Button>
          </Box>
          <Box flex="1" p={5} borderWidth="1px" borderRadius="lg" boxShadow="lg">
            <Text fontWeight="bold" mb={4} fontSize="xl" textAlign="center">
              Price Details
            </Text>
            <Flex justifyContent="space-between" mb={2}>
              <Text>Total MRP</Text>
              <Text>{"RS " + summary.totalMRP}</Text>
            </Flex>
            <Flex justifyContent="space-between" mb={2}>
              <Text>Discount</Text>
              <Text>-{"RS " + summary.totalDiscount}</Text>
            </Flex>
            <Flex justifyContent="space-between" mb={2}>
              <Text>Coupon Discount</Text>
              <Text>-{"RS " + summary.couponDiscount}</Text>
            </Flex>
            <Flex justifyContent="space-between" mb={2}>
              <Text>Platform Fee</Text>
              <Text>{"RS " + summary.platformFee}</Text>
            </Flex>
            <Flex justifyContent="space-between" mb={2}>
              <Text>Shipping Fee</Text>
              <Text>{summary.shippingFee === 0 ? "Free" : "RS " + summary.shippingFee}</Text>
            </Flex>
            <Divider my={3} />
            <Flex justifyContent="space-between" fontWeight="bold" fontSize="lg">
              <Text>Total Amount</Text>
              <Text>{"RS " + Math.floor(summary.totalAmount)}</Text>
            </Flex>
           
          </Box>
        </Flex>
      )}
    </Box>
      {step === 3 && (
         <Flex
         gap={10}
         mt={{ base: '2rem', md: '10rem' }}
         flexDirection={{ base: 'column', lg: 'row' }}
         justifyContent="space-between"
       >
         <Box flex="1"  p={5} borderWidth="1px" borderRadius="lg" boxShadow="lg">
         <Text fontSize="2xl" fontWeight="bold" mb={4}>
        Payment Method
      </Text>
      <FormControl>
        <RadioGroup onChange={setPaymentMethod} value={paymentMethod}>
          <Stack direction="column" spacing={4}>
            <Radio value="cod">Cash on Delivery</Radio>
            <Radio value="card">Credit/Debit Card</Radio>
            <Radio value="paypal">PayPal</Radio>
            {/* Add more payment options as needed */}
          </Stack>
        </RadioGroup>
      </FormControl>
      <Button  mt={8} w={"full"} colorScheme="teal" onClick={handlePayment}>
        Pay Now
      </Button>
         </Box>
         <Box flex="1" p={5} borderWidth="1px" borderRadius="lg" boxShadow="lg">
           <Text fontWeight="bold" mb={4} fontSize="xl" textAlign="center">
             Price Details
           </Text>
           <Flex justifyContent="space-between" mb={2}>
             <Text>Total MRP</Text>
             <Text>{"RS " + summary.totalMRP}</Text>
           </Flex>
           <Flex justifyContent="space-between" mb={2}>
             <Text>Discount</Text>
             <Text>-{"RS " + summary.totalDiscount}</Text>
           </Flex>
           <Flex justifyContent="space-between" mb={2}>
             <Text>Coupon Discount</Text>
             <Text>-{"RS " + summary.couponDiscount}</Text>
           </Flex>
           <Flex justifyContent="space-between" mb={2}>
             <Text>Platform Fee</Text>
             <Text>{"RS " + summary.platformFee}</Text>
           </Flex>
           <Flex justifyContent="space-between" mb={2}>
             <Text>Shipping Fee</Text>
             <Text>{summary.shippingFee === 0 ? "Free" : "RS " + summary.shippingFee}</Text>
           </Flex>
           <Divider my={3} />
           <Flex justifyContent="space-between" fontWeight="bold" fontSize="lg">
             <Text>Total Amount</Text>
             <Text>{"RS " + Math.floor(summary.totalAmount)}</Text>
           </Flex>
          
         </Box>
       </Flex>
      )}

      {step === 4 && (
         <Box w={"full"} mt={{ base: '10rem', md: '5rem' }} textAlign="center">
         <Image w={"30%"} m={'auto'} src="https://www.lami.co.in/images/order.gif" alt="Payment Successful" style={{ marginBottom: '2rem' }} />
         <Text fontSize="2xl" fontWeight="bold" mb={4}>
           Payment Successful
         </Text>
         <Text>Redirecting to home page...</Text>
         <Spinner color="teal.500" size="lg" mt={8} />
       </Box>
      )}
    </Box>
   </Box>
  );
};

export default Cart;
