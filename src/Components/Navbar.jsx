import {
  Box,
  Flex,
  Text,
  IconButton,
  Button,
  Stack,
  Collapse,
  Icon,
  Popover,
  PopoverTrigger,
  PopoverContent,
  useColorModeValue,
  useBreakpointValue,
  useDisclosure,
  HStack,
} from "@chakra-ui/react";
import {
  HamburgerIcon,
  CloseIcon,
  ChevronDownIcon,
  ChevronRightIcon,
} from "@chakra-ui/icons";
import { Link } from "react-router-dom";
export default function Navbar() {
  const { isOpen, onToggle } = useDisclosure();

  return (
    <Box zIndex={1000} w={"100%"} boxShadow={"xl"}>
      <Flex
        bg={useColorModeValue("white", "gray.800")}
        color={useColorModeValue("gray.600", "white")}
        minH={"60px"}
        py={{ base: 2 }}
        px={{ base: 4 }}
        borderBottom={1}
        borderStyle={"solid"}
        borderColor={useColorModeValue("gray.200", "gray.900")}
        align={"center"}
      >
        <Flex
          flex={{ base: 1, md: "auto" }}
          ml={{ base: -2 }}
          display={{ base: "flex", md: "none" }}
        >
          <IconButton
            onClick={onToggle}
            icon={
              isOpen ? <CloseIcon w={3} h={3} /> : <HamburgerIcon w={5} h={5} />
            }
            variant={"ghost"}
            aria-label={"Toggle Navigation"}
          />
        </Flex>
        <Flex flex={{ base: 1 }} justify={{ base: "center", md: "start" }}>
          <Flex w={"100%"} display={{ base: "none", md: "flex" }} ml={2}>
            <DesktopNav />
          </Flex>
        </Flex>
      </Flex>

      <Collapse in={isOpen} animateOpacity>
        <MobileNav />
      </Collapse>
    </Box>
  );
}

const DesktopNav = () => {
  const popoverContentBgColor = useColorModeValue("white", "gray.800");

  return (
    <Stack zIndex={1000} direction={"row"} spacing={8}>
      {NAV_ITEMS.map((navItem) => (
        <Box key={navItem.label}>
          <Popover trigger={"hover"} placement={"bottom-start"}>
            <PopoverTrigger>
              <Link
                p={2}
                to={navItem.href ?? "#"}
                fontSize={"sm"}
                fontWeight={500}
                _hover={{
                  textDecoration: "none",
                  color: "#9F2098",
                }}
              >
                {navItem.label}
              </Link>
            </PopoverTrigger>

            {navItem.children && (
              <PopoverContent
                border={0}
                boxShadow={"xl"}
                bg={popoverContentBgColor}
                p={4}
                rounded={"xl"}
                minW={"6xl"}
                zIndex={100000}
                opacity={1000}
              >
                <HStack>
                  {navItem.children.map((child) => (
                    <DesktopSubNav key={child.label} {...child} />
                  ))}
                </HStack>
              </PopoverContent>
            )}
          </Popover>
        </Box>
      ))}
    </Stack>
  );
};

const DesktopSubNav = ({ label, href, subLabel }) => {
  return (
    <Stack  mb={"auto"} direction={"row"} align={"flex-start"}>
      <Box>
        <Text
          transition={"all .3s ease"}
          _groupHover={{ color: "pink.400" }}
          fontWeight={400}
          mb={1}
          color={"#9F2098"}
          
        >
          <Link to={href}>{label}</Link>
        </Text>
        {subLabel?.map((el) => (
          <Text mb={1} fontSize={"sm"}>
            {el}
          </Text>
        ))}
      </Box>
      <Flex
        transition={"all .3s ease"}
        transform={"translateX(-10px)"}
        opacity={0}
        _groupHover={{ opacity: "100%", transform: "translateX(0)" }}
        justify={"flex-end"}
        align={"center"}
        flex={1}
      >
        <Icon color={"pink.400"} w={5} h={5} as={ChevronRightIcon} />
      </Flex>
    </Stack>
  );
};

const MobileNav = () => {
  return (
    <Stack
      bg={useColorModeValue("white", "gray.800")}
      p={4}
      display={{ md: "none" }}
    >
      {NAV_ITEMS.map((navItem) => (
        <MobileNavItem key={navItem.label} {...navItem} />
      ))}
    </Stack>
  );
};

const MobileNavItem = ({ label, children, href }) => {
  const { isOpen, onToggle } = useDisclosure();

  return (
    <Stack spacing={4} onClick={children && onToggle}>
      <Flex
        py={2}
        as={Link}
        to={href ?? "#"}
        justify={"space-between"}
        align={"center"}
        _hover={{
          textDecoration: "none",
        }}
      >
        <Text
          fontWeight={600}
          color={useColorModeValue("gray.600", "gray.200")}
        >
         <Link to={href}> {label}</Link>
        </Text>
        {children && (
          <Icon
            as={ChevronDownIcon}
            transition={"all .25s ease-in-out"}
            transform={isOpen ? "rotate(180deg)" : ""}
            w={6}
            h={6}
          />
        )}
      </Flex>

      <Collapse in={isOpen} animateOpacity style={{ marginTop: "0!important" }}>
        <Stack
          mt={2}
          pl={4}
          borderLeft={1}
          borderStyle={"solid"}
          borderColor={useColorModeValue("gray.200", "gray.700")}
          align={"start"}
        >
          {children &&
            children.map((child) => (
              <Link key={child.label} py={2} to={child.href}>
                {child.label}
              </Link>
            ))}
        </Stack>
      </Collapse>
    </Stack>
  );
};

const NAV_ITEMS = [
  {
    label: "Womens",
    children: [
      {
        label: "All Ethnic",
        subLabel: [""],
        href: "/womens",
      },
      {
        label: "Sarees",
        subLabel: [
          "All Sarees",

          "Silk Sarees",

          "Cotton Silk Sarees",

          "Cotton Sarees",

          "Georgette Sarees",

          "Chiffon Sarees",

          "Satin Sarees",

          "Embroidered Sarees",
        ],
        href: "#",
      },
      {
        label: "Kurties",
        subLabel: [
          " All Kurtis",

          "Anarkali Kurtis",

          "Rayon Kurtis",

          "Cotton Kurtis",

          "Embroidered Kurtis",
        ],
        href: "#",
      },
      {
        label: "Kurtas",
        subLabel: ["All Kurta Sets"],
        href: "/womens",
      },
      {
        label: "Suits & Dress Material",
        subLabel: [
          "All Suits",

          "Cotton Suits",

          "Embroidered Suits",

          "Chanderi Suits",
        ],
        href: "/womens",
      },
    ],
    href: "/womens",
  },

  {
    label: "Mens",
    children: [
      {
        label: "All Ethnic",
        subLabel: [""],
        href: "/mens",
      },
      {
        label: "Top Wear",
        subLabel: ["All Top Wear", "T-Shirt", "Shirts"],
        href: "/mens",
      },
      {
        label: "Bottom Wear",
        subLabel: ["Trackpants", "Jeans", "Pants"],
        href: "/mens",
      },
      {
        label: "Kurtas",
        subLabel: ["All Kurta Sets"],
        href: "/mens",
      },
      {
        label: "Suits & Dress Material",
        subLabel: [
          "All Suits",

          "Cotton Suits",

          "Embroidered Suits",

          "Chanderi Suits",
        ],
        href: "/mens",
      },
    ],
    href: "/mens",
  },
  {
    label: "Kinds",
    children: [
      {
        label: "All Ethnic",
        subLabel: [""],
        href: "/kids",
      },
      {
        label: "Top Wear",
        subLabel: ["All Top Wear", "T-Shirt", "Shirts"],
        href: "/kids",
      },
      {
        label: "Bottom Wear",
        subLabel: ["Trackpants", "Jeans", "Pants"],
        href: "/kids",
      },
      {
        label: "Kurtas",
        subLabel: ["All Kurta Sets"],
        href: "/kids",
      },
      {
        label: "Suits & Dress Material",
        subLabel: [
          "All Suits",

          "Cotton Suits",

          "Embroidered Suits",

          "Chanderi Suits",
        ],
        href: "#",
      },
    ],
    href: "/kids",
  },
  {
    label: "Home & Kitchen",
    href: "#",
  },
  {
    label: "Beauty & Health",
    href: "#",
  },
  {
    label: "Jewellery & Accessories",
    href: "#",
  },
  {
    label: "Bags & Footwear",
    href: "#",
  },
  {
    label: "Electronics",
    href: "#",
  },
  {
    label: "Other Stores",
    href: "#",
  },
];
