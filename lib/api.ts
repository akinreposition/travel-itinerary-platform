import type { Flight, Hotel, Activity, SearchFlightParams, SearchHotelParams, SearchActivityParams } from "@/types"

const RAPIDAPI_KEY = process.env.NEXT_PUBLIC_RAPIDAPI_KEY 
const RAPIDAPI_HOST = process.env.NEXT_PUBLIC_RAPIDAPI_HOST

const headers = {
  "X-RapidAPI-Key": RAPIDAPI_KEY,
  "X-RapidAPI-Host": RAPIDAPI_HOST,
}

// Mock data for demonstration - replace with actual API calls
const mockFlights: Flight[] = [
  {
    id: "1",
    airline: "American Airlines",
    flightNumber: "AA-924",
    departure: { time: "08:35", date: "Sun, 30 Aug", airport: "LOS" },
    arrival: { time: "09:55", date: "Sun, 30 Aug", airport: "SIN" },
    duration: "1h 20m",
    price: 123450.0,
    facilities: ["Baggage: 20kg", "Cabin baggage: 8kg", "In flight entertainment", "In flight meal", "USB Port"],
  },
  {
    id: "2",
    airline: "Delta Airlines",
    flightNumber: "DL-456",
    departure: { time: "14:20", date: "Sun, 30 Aug", airport: "LOS" },
    arrival: { time: "16:45", date: "Sun, 30 Aug", airport: "SIN" },
    duration: "2h 25m",
    price: 156780.0,
    facilities: ["Baggage: 25kg", "Cabin baggage: 10kg", "In flight entertainment", "In flight meal", "WiFi"],
  },
]

const mockHotels: Hotel[] = [
  {
    id: "1",
    name: "Riviera Resort, Lekki",
    address: "18, Kenneth Agbakuru Street, Off Access Bank Admiralty Way, Lekki Phase1",
    rating: 4.5,
    reviews: 436,
    price: 123450.0,
    originalPrice: 160000.0,
    roomsLeft: 3,
    checkIn: "20-04-2024",
    checkOut: "29-04-2024",
    facilities: ["Pool", "Bar"],
    image: "/placeholder.svg?height=200&width=300&text=Hotel+Image",
  },
  {
    id: "2",
    name: "Grand Palace Hotel",
    address: "25, Victoria Island, Lagos State",
    rating: 4.8,
    reviews: 892,
    price: 189000.0,
    originalPrice: 220000.0,
    roomsLeft: 2,
    checkIn: "20-04-2024",
    checkOut: "29-04-2024",
    facilities: ["Pool", "Spa", "Gym", "Restaurant"],
    image: "/placeholder.svg?height=200&width=300&text=Grand+Palace",
  },
]

const mockActivities: Activity[] = [
  {
    id: "1",
    name: "The Museum of Modern Art",
    description: "Works from Van Gogh to Warhol & beyond plus a sculpture garden, 2 cafes & The modern restaurant.",
    rating: 4.5,
    reviews: 432,
    duration: "1 Hour",
    price: 123450.0,
    originalPrice: 160000.0,
    included: "Admission to the Empire State Building",
    image: "/placeholder.svg?height=200&width=300&text=Museum+Image",
  },
  {
    id: "2",
    name: "City Walking Tour",
    description: "Explore the historic downtown area with a professional guide and learn about local culture.",
    rating: 4.7,
    reviews: 256,
    duration: "3 Hours",
    price: 85000.0,
    originalPrice: 100000.0,
    included: "Professional guide, refreshments",
    image: "/placeholder.svg?height=200&width=300&text=Walking+Tour",
  },
]
const mockGetFlights: Flight[] = [
  {
  "status": true,
  "message": "Success",
  "timestamp": 1698325784757,
  "data": {
    "token": "d7699_H4sIAAAAAAAA_y1QbY-iMBD-Ne6n5aUtgmzSXBSq50plFcQ7vjRYK-J6cmfJgvz6G3XTmT4vM9M0c2yav_rNsg7nqjw22qguZlk3dVk0ypT1H-twhWtX15_VpbSK6mpNYh6yCA-XcWbjkAUWekXeq20ZcOTb7x-qawx9lfSl2imz0JKSxTe9Utck7myco4w9LFk31DHJx9hH7iwd-0_zSmeLSehED7WnPGi7uB9rnmonCkuPbxwN6fET15AeR5NJnDK87uftKmn7DWNDnuY_-WkyjXt2W35uYHaO10nbLafvRRQye3OuwVsn26rt-CkPo2meJ3eesTZGcycJuiRmpV6l-4-IMZLeWpyFK83t_FcWtG0U2Ld1OyAhxOObSkqKTNPxfPTQdaEptp9UNhSPnnTf0ITgbLF9ynvBH_nfMx1F2COjF63OSjZVfVmoG3WZO0QGbLv-wsRYCdAIOQZsXkkw3gc4QM7B15cRsAEZQ5TCNm3AIyACLARCxIQEvhP-EEAK_968F8hHO3K4dyuBR8VQuUAPwmEAlUAmerxwEvMtQC_-qaK2-_8vUjsNMwIAAA..",
    "segments": [
      {
        "departureAirport": {
          "type": "AIRPORT",
          "code": "BOM",
          "city": "BOM",
          "cityName": "Mumbai",
          "country": "IN",
          "countryName": "India",
          "name": "Mumbai"
        },
        "arrivalAirport": {
          "type": "AIRPORT",
          "code": "DEL",
          "city": "DEL",
          "cityName": "Delhi",
          "country": "IN",
          "countryName": "India",
          "name": "Delhi"
        },
        "departureTime": "2023-11-25T22:15:00",
        "arrivalTime": "2023-11-26T00:25:00",
        "legs": [
          {
            "departureTime": "2023-11-25T22:15:00",
            "arrivalTime": "2023-11-26T00:25:00",
            "departureAirport": {
              "type": "AIRPORT",
              "code": "BOM",
              "city": "BOM",
              "cityName": "Mumbai",
              "country": "IN",
              "countryName": "India",
              "name": "Mumbai"
            },
            "arrivalAirport": {
              "type": "AIRPORT",
              "code": "DEL",
              "city": "DEL",
              "cityName": "Delhi",
              "country": "IN",
              "countryName": "India",
              "name": "Delhi"
            },
            "cabinClass": "ECONOMY",
            "flightInfo": {
              "facilities": [],
              "flightNumber": 651,
              "planeType": "",
              "carrierInfo": {
                "operatingCarrier": "6E",
                "marketingCarrier": "6E",
                "operatingCarrierDisclosureText": ""
              }
            },
            "carriers": [
              "6E",
              "6E"
            ],
            "carriersData": [
              {
                "name": "IndiGo",
                "code": "6E",
                "logo": "https://r-xx.bstatic.com/data/airlines_logo/6E.png"
              },
              {
                "name": "IndiGo",
                "code": "6E",
                "logo": "https://r-xx.bstatic.com/data/airlines_logo/6E.png"
              }
            ],
            "totalTime": 7800,
            "flightStops": []
          }
        ],
        "totalTime": 7800,
        "travellerCheckedLuggage": [
          {
            "travellerReference": "1",
            "luggageAllowance": {
              "luggageType": "CHECKED_IN",
              "ruleType": "PIECE_BASED",
              "maxPiece": 1,
              "maxWeightPerPiece": 33.1,
              "massUnit": "LB"
            }
          },
          {
            "travellerReference": "2",
            "luggageAllowance": {
              "luggageType": "CHECKED_IN",
              "ruleType": "PIECE_BASED",
              "maxPiece": 1,
              "maxWeightPerPiece": 33.1,
              "massUnit": "LB"
            }
          }
        ],
        "travellerCabinLuggage": [
          {
            "travellerReference": "1",
            "luggageAllowance": {
              "luggageType": "HAND",
              "maxPiece": 1,
              "maxWeightPerPiece": 15.4,
              "massUnit": "LB",
              "sizeRestrictions": {
                "maxLength": 21.7,
                "maxWidth": 13.8,
                "maxHeight": 9.8,
                "sizeUnit": "INCH"
              }
            }
          },
          {
            "travellerReference": "2",
            "luggageAllowance": {
              "luggageType": "HAND",
              "maxPiece": 1,
              "maxWeightPerPiece": 15.4,
              "massUnit": "LB",
              "sizeRestrictions": {
                "maxLength": 21.7,
                "maxWidth": 13.8,
                "maxHeight": 9.8,
                "sizeUnit": "INCH"
              }
            }
          }
        ],
        "isAtolProtected": false,
        "showWarningDestinationAirport": false,
        "showWarningOriginAirport": false
      },
      {
        "departureAirport": {
          "type": "AIRPORT",
          "code": "DEL",
          "city": "DEL",
          "cityName": "Delhi",
          "country": "IN",
          "countryName": "India",
          "name": "Delhi"
        },
        "arrivalAirport": {
          "type": "AIRPORT",
          "code": "BOM",
          "city": "BOM",
          "cityName": "Mumbai",
          "country": "IN",
          "countryName": "India",
          "name": "Mumbai"
        },
        "departureTime": "2023-12-02T22:15:00",
        "arrivalTime": "2023-12-03T00:25:00",
        "legs": [
          {
            "departureTime": "2023-12-02T22:15:00",
            "arrivalTime": "2023-12-03T00:25:00",
            "departureAirport": {
              "type": "AIRPORT",
              "code": "DEL",
              "city": "DEL",
              "cityName": "Delhi",
              "country": "IN",
              "countryName": "India",
              "name": "Delhi"
            },
            "arrivalAirport": {
              "type": "AIRPORT",
              "code": "BOM",
              "city": "BOM",
              "cityName": "Mumbai",
              "country": "IN",
              "countryName": "India",
              "name": "Mumbai"
            },
            "cabinClass": "ECONOMY",
            "flightInfo": {
              "facilities": [],
              "flightNumber": 6114,
              "planeType": "",
              "carrierInfo": {
                "operatingCarrier": "6E",
                "marketingCarrier": "6E",
                "operatingCarrierDisclosureText": ""
              }
            },
            "carriers": [
              "6E",
              "6E"
            ],
            "carriersData": [
              {
                "name": "IndiGo",
                "code": "6E",
                "logo": "https://r-xx.bstatic.com/data/airlines_logo/6E.png"
              },
              {
                "name": "IndiGo",
                "code": "6E",
                "logo": "https://r-xx.bstatic.com/data/airlines_logo/6E.png"
              }
            ],
            "totalTime": 7800,
            "flightStops": []
          }
        ],
        "totalTime": 7800,
        "travellerCheckedLuggage": [
          {
            "travellerReference": "1",
            "luggageAllowance": {
              "luggageType": "CHECKED_IN",
              "ruleType": "PIECE_BASED",
              "maxPiece": 1,
              "maxWeightPerPiece": 33.1,
              "massUnit": "LB"
            }
          },
          {
            "travellerReference": "2",
            "luggageAllowance": {
              "luggageType": "CHECKED_IN",
              "ruleType": "PIECE_BASED",
              "maxPiece": 1,
              "maxWeightPerPiece": 33.1,
              "massUnit": "LB"
            }
          }
        ],
        "travellerCabinLuggage": [
          {
            "travellerReference": "1",
            "luggageAllowance": {
              "luggageType": "HAND",
              "maxPiece": 1,
              "maxWeightPerPiece": 15.4,
              "massUnit": "LB",
              "sizeRestrictions": {
                "maxLength": 21.7,
                "maxWidth": 13.8,
                "maxHeight": 9.8,
                "sizeUnit": "INCH"
              }
            }
          },
          {
            "travellerReference": "2",
            "luggageAllowance": {
              "luggageType": "HAND",
              "maxPiece": 1,
              "maxWeightPerPiece": 15.4,
              "massUnit": "LB",
              "sizeRestrictions": {
                "maxLength": 21.7,
                "maxWidth": 13.8,
                "maxHeight": 9.8,
                "sizeUnit": "INCH"
              }
            }
          }
        ],
        "isAtolProtected": false,
        "showWarningDestinationAirport": false,
        "showWarningOriginAirport": false
      }
    ],
    "priceBreakdown": {
      "total": {
        "currencyCode": "AED",
        "units": 1352,
        "nanos": 770000000
      },
      "baseFare": {
        "currencyCode": "AED",
        "units": 1123,
        "nanos": 350000000
      },
      "fee": {
        "currencyCode": "AED",
        "units": 0,
        "nanos": 0
      },
      "tax": {
        "currencyCode": "AED",
        "units": 229,
        "nanos": 420000000
      },
      "totalRounded": {
        "currencyCode": "AED",
        "nanos": 770000000,
        "units": 1352
      },
      "moreTaxesAndFees": {},
      "discount": {
        "currencyCode": "AED",
        "units": 0,
        "nanos": 0
      },
      "totalWithoutDiscount": {
        "currencyCode": "AED",
        "units": 1352,
        "nanos": 770000000
      },
      "totalWithoutDiscountRounded": {
        "currencyCode": "AED",
        "nanos": 770000000,
        "units": 1352
      },
      "carrierTaxBreakdown": [
        {
          "carrier": {
            "name": "IndiGo",
            "code": "6E",
            "logo": "https://r-xx.bstatic.com/data/airlines_logo/6E.png"
          },
          "avgPerAdult": {
            "currencyCode": "AED",
            "units": 114,
            "nanos": 710000000
          },
          "avgPerChild": {
            "currencyCode": "AED",
            "units": 114,
            "nanos": 710000000
          }
        }
      ]
    },
    "travellerPrices": [
      {
        "travellerPriceBreakdown": {
          "total": {
            "currencyCode": "AED",
            "units": 589,
            "nanos": 240000000
          },
          "baseFare": {
            "currencyCode": "AED",
            "units": 474,
            "nanos": 530000000
          },
          "fee": {
            "currencyCode": "AED",
            "units": 0,
            "nanos": 0
          },
          "tax": {
            "currencyCode": "AED",
            "units": 114,
            "nanos": 710000000
          },
          "totalRounded": {
            "currencyCode": "AED",
            "nanos": 220000000,
            "units": 589
          },
          "moreTaxesAndFees": {},
          "discount": {
            "currencyCode": "AED",
            "units": 0,
            "nanos": 0
          },
          "totalWithoutDiscount": {
            "currencyCode": "AED",
            "units": 589,
            "nanos": 240000000
          },
          "totalWithoutDiscountRounded": {
            "currencyCode": "AED",
            "nanos": 220000000,
            "units": 589
          }
        },
        "travellerReference": "1",
        "travellerType": "ADULT"
      },
      {
        "travellerPriceBreakdown": {
          "total": {
            "currencyCode": "AED",
            "units": 589,
            "nanos": 240000000
          },
          "baseFare": {
            "currencyCode": "AED",
            "units": 474,
            "nanos": 530000000
          },
          "fee": {
            "currencyCode": "AED",
            "units": 0,
            "nanos": 0
          },
          "tax": {
            "currencyCode": "AED",
            "units": 114,
            "nanos": 710000000
          },
          "totalRounded": {
            "currencyCode": "AED",
            "nanos": 220000000,
            "units": 589
          },
          "moreTaxesAndFees": {},
          "discount": {
            "currencyCode": "AED",
            "units": 0,
            "nanos": 0
          },
          "totalWithoutDiscount": {
            "currencyCode": "AED",
            "units": 589,
            "nanos": 240000000
          },
          "totalWithoutDiscountRounded": {
            "currencyCode": "AED",
            "nanos": 220000000,
            "units": 589
          }
        },
        "travellerReference": "2",
        "travellerType": "KID"
      },
      {
        "travellerPriceBreakdown": {
          "total": {
            "currencyCode": "AED",
            "units": 174,
            "nanos": 290000000
          },
          "baseFare": {
            "currencyCode": "AED",
            "units": 174,
            "nanos": 290000000
          },
          "fee": {
            "currencyCode": "AED",
            "units": 0,
            "nanos": 0
          },
          "tax": {
            "currencyCode": "AED",
            "units": 0,
            "nanos": 0
          },
          "totalRounded": {
            "currencyCode": "AED",
            "nanos": 270000000,
            "units": 174
          },
          "moreTaxesAndFees": {},
          "discount": {
            "currencyCode": "AED",
            "units": 0,
            "nanos": 0
          },
          "totalWithoutDiscount": {
            "currencyCode": "AED",
            "units": 174,
            "nanos": 290000000
          },
          "totalWithoutDiscountRounded": {
            "currencyCode": "AED",
            "nanos": 270000000,
            "units": 174
          }
        },
        "travellerReference": "3",
        "travellerType": "KID"
      }
    ],
    "priceDisplayRequirements": [],
    "pointOfSale": "in",
    "tripType": "ROUNDTRIP",
    "offerReference": "d7699_1247321192",
    "bookerDataRequirement": [
      "EMAIL",
      "PHONE"
    ],
    "travellers": [
      {
        "travellerReference": "1",
        "type": "ADULT"
      },
      {
        "travellerReference": "2",
        "type": "KID",
        "age": 17
      },
      {
        "travellerReference": "3",
        "type": "KID",
        "age": 0
      }
    ],
    "posMismatch": {
      "detectedPointOfSale": "us",
      "isPOSMismatch": false,
      "offerSalesCountry": "in"
    },
    "includedProductsBySegment": [
      [
        {
          "travellerReference": "1",
          "travellerProducts": [
            {
              "type": "checkedInBaggage",
              "product": {
                "luggageType": "CHECKED_IN",
                "ruleType": "PIECE_BASED",
                "maxPiece": 1,
                "maxWeightPerPiece": 33.1,
                "massUnit": "LB"
              }
            },
            {
              "type": "cabinBaggage",
              "product": {
                "luggageType": "HAND",
                "maxPiece": 1,
                "maxWeightPerPiece": 15.4,
                "massUnit": "LB",
                "sizeRestrictions": {
                  "maxLength": 21.7,
                  "maxWidth": 13.8,
                  "maxHeight": 9.8,
                  "sizeUnit": "INCH"
                }
              }
            }
          ]
        },
        {
          "travellerReference": "2",
          "travellerProducts": [
            {
              "type": "checkedInBaggage",
              "product": {
                "luggageType": "CHECKED_IN",
                "ruleType": "PIECE_BASED",
                "maxPiece": 1,
                "maxWeightPerPiece": 33.1,
                "massUnit": "LB"
              }
            },
            {
              "type": "cabinBaggage",
              "product": {
                "luggageType": "HAND",
                "maxPiece": 1,
                "maxWeightPerPiece": 15.4,
                "massUnit": "LB",
                "sizeRestrictions": {
                  "maxLength": 21.7,
                  "maxWidth": 13.8,
                  "maxHeight": 9.8,
                  "sizeUnit": "INCH"
                }
              }
            }
          ]
        }
      ],
      [
        {
          "travellerReference": "1",
          "travellerProducts": [
            {
              "type": "checkedInBaggage",
              "product": {
                "luggageType": "CHECKED_IN",
                "ruleType": "PIECE_BASED",
                "maxPiece": 1,
                "maxWeightPerPiece": 33.1,
                "massUnit": "LB"
              }
            },
            {
              "type": "cabinBaggage",
              "product": {
                "luggageType": "HAND",
                "maxPiece": 1,
                "maxWeightPerPiece": 15.4,
                "massUnit": "LB",
                "sizeRestrictions": {
                  "maxLength": 21.7,
                  "maxWidth": 13.8,
                  "maxHeight": 9.8,
                  "sizeUnit": "INCH"
                }
              }
            }
          ]
        },
        {
          "travellerReference": "2",
          "travellerProducts": [
            {
              "type": "checkedInBaggage",
              "product": {
                "luggageType": "CHECKED_IN",
                "ruleType": "PIECE_BASED",
                "maxPiece": 1,
                "maxWeightPerPiece": 33.1,
                "massUnit": "LB"
              }
            },
            {
              "type": "cabinBaggage",
              "product": {
                "luggageType": "HAND",
                "maxPiece": 1,
                "maxWeightPerPiece": 15.4,
                "massUnit": "LB",
                "sizeRestrictions": {
                  "maxLength": 21.7,
                  "maxWidth": 13.8,
                  "maxHeight": 9.8,
                  "sizeUnit": "INCH"
                }
              }
            }
          ]
        }
      ]
    ],
    "includedProducts": {
      "areAllSegmentsIdentical": true,
      "segments": [
        [
          {
            "luggageType": "HAND",
            "maxPiece": 2,
            "maxWeightPerPiece": 15.4,
            "massUnit": "LB",
            "sizeRestrictions": {
              "maxLength": 21.7,
              "maxWidth": 13.8,
              "maxHeight": 9.8,
              "sizeUnit": "INCH"
            }
          },
          {
            "luggageType": "CHECKED_IN",
            "ruleType": "PIECE_BASED",
            "maxPiece": 2,
            "maxWeightPerPiece": 33.1,
            "massUnit": "LB"
          }
        ]
      ]
    },
    "extraProducts": [
      {
        "type": "mobileTravelPlan",
        "priceBreakdown": {
          "total": {
            "currencyCode": "AED",
            "units": 0,
            "nanos": 0
          },
          "baseFare": {
            "currencyCode": "AED",
            "units": 0,
            "nanos": 0
          },
          "fee": {
            "currencyCode": "AED",
            "units": 0,
            "nanos": 0
          },
          "tax": {
            "currencyCode": "AED",
            "units": 0,
            "nanos": 0
          },
          "moreTaxesAndFees": {},
          "discount": {
            "currencyCode": "AED",
            "units": 0,
            "nanos": 0
          },
          "totalWithoutDiscount": {
            "currencyCode": "AED",
            "units": 0,
            "nanos": 0
          }
        }
      }
    ],
    "offerExtras": {
      "mobileTravelPlan": {
        "priceBreakdown": {
          "total": {
            "currencyCode": "AED",
            "units": 0,
            "nanos": 0
          },
          "baseFare": {
            "currencyCode": "AED",
            "units": 0,
            "nanos": 0
          },
          "fee": {
            "currencyCode": "AED",
            "units": 0,
            "nanos": 0
          },
          "tax": {
            "currencyCode": "AED",
            "units": 0,
            "nanos": 0
          },
          "moreTaxesAndFees": {},
          "discount": {
            "currencyCode": "AED",
            "units": 0,
            "nanos": 0
          },
          "totalWithoutDiscount": {
            "currencyCode": "AED",
            "units": 0,
            "nanos": 0
          }
        }
      }
    },
    "brandedFareInfo": {
      "fareName": "Regular fare",
      "cabinClass": "ECONOMY",
      "features": [],
      "fareAttributes": [],
      "nonIncludedFeatures": []
    },
    "fareRulesStatus": {
      "legs": [
        {
          "legIdentifier": {
            "segmentIndex": 0,
            "legIndex": 0
          },
          "carrierName": "IndiGo",
          "changeable": "UNKNOWN_FARE_RULES",
          "refundable": "UNKNOWN_FARE_RULES"
        },
        {
          "legIdentifier": {
            "segmentIndex": 1,
            "legIndex": 0
          },
          "carrierName": "IndiGo",
          "changeable": "UNKNOWN_FARE_RULES",
          "refundable": "UNKNOWN_FARE_RULES"
        }
      ],
      "areAllStatusesIdentical": true,
      "areAllCarriersIdentical": true,
      "policy": null
    },
    "ancillaries": {
      "mobileTravelPlan": {
        "priceBreakdown": {
          "total": {
            "currencyCode": "AED",
            "units": 0,
            "nanos": 0
          },
          "baseFare": {
            "currencyCode": "AED",
            "units": 0,
            "nanos": 0
          },
          "fee": {
            "currencyCode": "AED",
            "units": 0,
            "nanos": 0
          },
          "tax": {
            "currencyCode": "AED",
            "units": 0,
            "nanos": 0
          },
          "moreTaxesAndFees": {},
          "discount": {
            "currencyCode": "AED",
            "units": 0,
            "nanos": 0
          },
          "totalWithoutDiscount": {
            "currencyCode": "AED",
            "units": 0,
            "nanos": 0
          }
        }
      }
    },
    "appliedDiscounts": [],
    "baggagePolicies": [
      {
        "code": "6E",
        "name": "IndiGo",
        "url": "https://www.goindigo.in/baggage.html"
      }
    ],
    "extraProductDisplayRequirements": {},
    "carbonEmissions": {
      "footprintForOffer": {
        "quantity": 148.14,
        "unit": "KG",
        "status": "UNKNOWN",
        "average": 0,
        "percentageDifference": 0
      }
    }
  }
}
]
export async function getFlights(params: SearchFlightParams): Promise<Flight[]> {
  await new Promise((resolve) => setTimeout(resolve, 1000))
  try {
    const response = await fetch(`https://${RAPIDAPI_HOST}api/v1/flights/getFlightDetails?currency_code=AED`, {
      method: 'GET',
      headers: {
        ...headers,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        origin: params.from,
        destination: params.to,
        departureDate: params.departDate,
        returnDate: params.returnDate,
        adults: parseInt(params.passengers)
      })
    })
    
    if (!response.ok) {
      throw new Error('Failed to search flights')
    }
    
    const data = await response.json()
    return data.flights || []
  } catch (error) {
    console.error('Error searching flights:', error)
    throw error
  }
  
  // Return mock data for now
  // return mockFlights
}

export async function searchFlights(params: SearchFlightParams): Promise<Flight[]> {
  await new Promise((resolve) => setTimeout(resolve, 1000))
  try {
    const response = await fetch(`https://${RAPIDAPI_HOST}/api/v1/flights/searchFlights`, {
      method: 'POST',
      headers: {
        ...headers,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        origin: params.from,
        destination: params.to,
        departureDate: params.departDate,
        returnDate: params.returnDate,
        adults: parseInt(params.passengers)
      })
    })
    
    if (!response.ok) {
      throw new Error('Failed to search flights')
    }
    
    const data = await response.json()
    return data.flights || []
  } catch (error) {
    console.error('Error searching flights:', error)
    throw error
  }
  
  // Return mock data for now
  // return mockFlights
}

export async function searchHotels(params: SearchHotelParams): Promise<Hotel[]> {
  await new Promise((resolve) => setTimeout(resolve, 1000))
  try {
    const response = await fetch(`https://${RAPIDAPI_HOST}/api/v1/hotels/searchHotels`, {
      method: 'POST',
      headers: {
        ...headers,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        destination: params.destination,
        checkInDate: params.checkIn,
        checkOutDate: params.checkOut,
        adults: parseInt(params.guests),
        rooms: parseInt(params.rooms)
      })
    })
    
    if (!response.ok) {
      throw new Error('Failed to search hotels')
    }
    
    const data = await response.json()
    return data.hotels || []
  } catch (error) {
    console.error('Error searching hotels:', error)
    throw error
  }
  // Return mock data for now
  // return mockHotels
}

export async function searchActivities(params: SearchActivityParams): Promise<Activity[]> {
  await new Promise((resolve) => setTimeout(resolve, 1000))
  try {
    const response = await fetch(`https://${RAPIDAPI_HOST}/api/v1/attractions/searchAttractions`, {
      method: 'POST',
      headers: {
        ...headers,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        destination: params.destination,
        date: params.date,
        category: params.category
      })
    })
    
    if (!response.ok) {
      throw new Error('Failed to search activities')
    }
    
    const data = await response.json()
    return data.activities || []
  } catch (error) {
    console.error('Error searching activities:', error)
    throw error
  }
  // Return mock data for now
  // return mockActivities
}
