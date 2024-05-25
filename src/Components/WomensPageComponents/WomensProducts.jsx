import {
  Box,
  Breadcrumb,
  BreadcrumbItem,
  Button,
  Flex,
  IconButton,
  Select,
  SimpleGrid,
  Text,
  Tooltip,
  Wrap,
  WrapItem,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { useGetAllProductsQuery } from "../../Redux/service/productsService/products";
import { Link, useSearchParams } from "react-router-dom";
import WomensProductList from "./WomensProductList";
import WomenslistSidebar from "./WomenslistSidebar";
import {
  ArrowDownIcon,
  ArrowUpIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
} from "@chakra-ui/icons";
import EmptyState from "../EmptyState";
import ErrorPage from "../Error";
import ProductSkeleton from "../Skeleton/ProductSkeleton";
const WomensProducts = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [searchTerm, setSearchTerm] = useState();
  const [debouncedSearchTerm, setDebouncedSearchTerm] = useState(searchTerm);
  const [discountPrice, setDisCountPrice] = useState(
    searchParams.getAll("maxDiscountPercentage")
  );
  const [page, setPage] = useState(1);

  const handleSorting = (e) => {
    let value = e.target.value;
    let obj = {};
    if (value) {
      obj.sortBy = value;
    }
    setSearchParams(obj);
  };
  //useEffect that handle search product and discount slider
  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedSearchTerm(searchTerm);
      setDisCountPrice(searchParams.getAll("maxDiscountPercentage"));
    }, 2000);
    return () => {
      clearTimeout(handler);
    };
  }, [searchTerm, searchParams.getAll("maxDiscountPercentage")]);

  function buildQueryString(params) {
    const query = new URLSearchParams();

    Object.keys(params).forEach((key) => {
      const value = params[key];
      if (value !== undefined && value !== null) {
        if (Array.isArray(value)) {
          value.forEach((val) => query.append(key, val));
        } else {
          query.append(key, value);
        }
      }
    });

    return query.toString();
  }

  let params = {
    category: "womens",
    page: page,
    limit: 9,
    title: debouncedSearchTerm,
    brand: searchParams.getAll("brand"),
    minPrice: searchParams.getAll("minPrice"),
    maxPrice: searchParams.getAll("maxPrice"),
    maxDiscountPercentage: discountPrice,
    sortBy: searchParams.getAll("sortBy"),
  };

  const queryString = buildQueryString(params);
  const { data, isError, isLoading } = useGetAllProductsQuery(queryString);

  const handlePagination = (val) => {
    setPage(val);
  };
  if (data?.length === 0) {
    return <EmptyState searchTerm={searchTerm} setSearchTerm={setSearchTerm} />;
  }
  if (isError) {
    return <ErrorPage />;
  }
  if(isLoading) return <ProductSkeleton />
  return (
    <Flex flexDir={"column"} gap={3}>
      <Breadcrumb>
        <BreadcrumbItem>
          <Text fontSize={"small"} as={Link} to={"/"}>
            Home
          </Text>
        </BreadcrumbItem>
        <BreadcrumbItem>
          <Text fontSize={"small"} fontWeight={600} as={Link} to={"/womens"}>
            Womens Fasion Store
          </Text>
        </BreadcrumbItem>
      </Breadcrumb>

      <Text fontWeight={600} fontSize={"small"}>
        Womens Fasion Store {data?.length || 0} items
      </Text>

      <Flex
        flexDir={{ base: "column", sm: "column", md: "column", lg: "row" }}
        gap={10}
      >
        <WomenslistSidebar
          setSearchTerm={setSearchTerm}
          searchTerm={searchTerm}
        />
        <Flex gap={5} flexDir={"column"}>
          <Box p="4" w={{ base: "full", sm: "full", md: "full", lg: "40%" }}>
            <Select
              placeholder="Sort by"
              onChange={handleSorting}
              colorScheme="teal"
            >
              <option value="price_asc">Price: Low to High</option>
              <option value="price_desc">Price: High to Low</option>
              <option value="brand_asc">Brand: A-Z</option>
              {/* <option value="brand-desc">Brand: Z-A</option> */}
              <option value="title_asc">Title: A-Z</option>
              {/* <option value="title-desc">Title: Z-A</option> */}
              <option value="discount_asc">Discount: Low to High</option>
              {/* <option value="discount-desc">Discount: High to Low</option> */}
            </Select>
          </Box>
          <SimpleGrid spacing={6} columns={{ base: 1, sm: 2, md: 3, lg: 3 }}>
            {data?.products?.map((el) => (
              <WomensProductList key={el._id} {...el} />
            ))}
          </SimpleGrid>

          <Flex mt={8} alignItems="center" justifyContent="center" w="full">
            <Wrap spacing={2} justify="center">
              <WrapItem>
                <Tooltip label="Previous" aria-label="Previous Page">
                  <IconButton
                    icon={<ChevronLeftIcon />}
                    colorScheme="teal"
                    variant="outline"
                    size={{ base: "md", md: "lg" }}
                    onClick={() => handlePagination(page - 1)}
                    isDisabled={page === 1}
                    aria-label="Previous Page"
                  />
                </Tooltip>
              </WrapItem>
              {data?.totalPages?.map((el) => (
                <WrapItem key={el}>
                  <Button
                    onClick={() => handlePagination(el)}
                    isDisabled={page === el}
                    colorScheme={page === el ? "teal" : "gray"}
                    variant={page === el ? "solid" : "ghost"}
                    size={{ base: "md", md: "lg" }}
                    _hover={{ bg: page === el ? "teal.600" : "gray.200" }}
                    borderRadius="full"
                  >
                    {el}
                  </Button>
                </WrapItem>
              ))}
              <WrapItem>
                <Tooltip label="Next" aria-label="Next Page">
                  <IconButton
                    icon={<ChevronRightIcon />}
                    colorScheme="teal"
                    variant="outline"
                    size={{ base: "md", md: "lg" }}
                    onClick={() => handlePagination(page + 1)}
                    isDisabled={page === data?.totalPages?.length}
                    aria-label="Next Page"
                  />
                </Tooltip>
              </WrapItem>
            </Wrap>
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default WomensProducts;
