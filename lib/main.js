'use strict';

const titlecase = require('titlecase').toLaxTitleCase
 
function getAbbreviation(word){
	        const allAbbreviations = {  
            "ALLEY":"ALY" ,
            "ALY" :"ALLEY",
            "ANEX": "ANX" ,
            "ANX" :"ANEX",
            "ARC" :"ARCADE",
            "ARCADE": "ARC" ,
            "AVE" :"AVENUE",
            "AVENUE": "AVE" ,
            "BAYOU": "BYU" ,
            "BCH" :"BEACH",
            "BEACH": "BCH" ,
            "BEND": "BND" ,
            "BG" :"BURG",
            "BGS" :"BURGS",
            "BLF" :"BLUFF",
            "BLFS" :"BLUFFS",
            "BLUFF": "BLF" ,
            "BLUFFS": "BLFS" ,
            "BLVD" :"BOULEVARD",
            "BND" :"BEND",
            "BOTTOM": "BTM" ,
            "BOULEVARD": "BLVD" ,
            "BR" :"BRANCH",
            "BRANCH": "BR" ,
            "BRG" :"BRIDGE",
            "BRIDGE": "BRG" ,
            "BRK" :"BROOK",
            "BRKS" :"BROOKS",
            "BROOK": "BRK" ,
            "BROOKS": "BRKS" ,
            "BTM" :"BOTTOM",
            "BURG": "BG" ,
            "BURGS": "BGS" ,
            "BYP" :"BYPASS",
            "BYPASS": "BYP" ,
            "BYU" :"BAYOU",
            "CAMP": "CP" ,
            "CANYON": "CYN" ,
            "CAPE": "CPE" ,
            "CAUSEWAY": "CSWY" ,
            "CENTER": "CTR" ,
            "CENTERS": "CTRS" ,
            "CIR" :"CIRCLE",
            "CIRCLE": "CIR" ,
            "CIRCLES": "CIRS" ,
            "CIRS" :"CIRCLES",
            "CLB" :"CLUB",
            "CLF" :"CLIFF",
            "CLFS" :"CLIFFS",
            "CLIFF": "CLF" ,
            "CLIFFS": "CLFS" ,
            "CLUB": "CLB" ,
            "CMN" :"COMMON",
            "CMNS" :"COMMONS",
            "COMMON": "CMN" ,
            "COMMONS": "CMNS" ,
            "COR" :"CORNER",
            "CORNER": "COR" ,
            "CORNERS": "CORS" ,
            "CORS" :"CORNERS",
            "COURSE": "CRSE" ,
            "COURT": "CT" ,
            "COURTS": "CTS" ,
            "COVE": "CV" ,
            "COVES": "CVS" ,
            "CP" :"CAMP",
            "CPE" :"CAPE",
            "CREEK": "CRK" ,
            "CRES" :"CRESCENT",
            "CRESCENT": "CRES" ,
            "CREST": "CRST" ,
            "CRK" :"CREEK",
            "CROSSING": "XING" ,
            "CROSSROAD": "XRD" ,
            "CROSSROADS": "XRDS" ,
            "CRSE" :"COURSE",
            "CRST" :"CREST",
            "CSWY" :"CAUSEWAY",
            "CT" :"COURT",
            "CTR" :"CENTER",
            "CTRS" :"CENTERS",
            "CTS" :"COURTS",
            "CURV" :"CURVE ",
            "CURVE ": "CURV" ,
            "CV" :"COVE",
            "CVS" :"COVES",
            "CYN" :"CANYON",
            "DALE": "DL" ,
            "DAM": "DM" ,
            "DIVIDE": "DV" ,
            "DL" :"DALE",
            "DM" :"DAM",
            "DR" :"DRIVE",
            "DRIVE": "DR" ,
            "DRIVES ": "DRS" ,
            "DRS" :"DRIVES ",
            "DV" :"DIVIDE",
            "E": "EAST",
            "EAST": "E",
            "EST" :"ESTATE",
            "ESTATE": "EST" ,
            "ESTATES": "ESTS" ,
            "ESTS" :"ESTATES",
            "EXPRESSWAY": "EXPY" ,
            "EXPY" :"EXPRESSWAY",
            "EXT" :"EXTENSION",
            "EXTENSION": "EXT" ,
            "EXTENSIONS": "EXTS" ,
            "EXTS" :"EXTENSIONS",
            "FALLS": "FLS" ,
            "FERRY": "FRY" ,
            "FIELD": "FLD" ,
            "FIELDS": "FLDS" ,
            "FLAT": "FLT" ,
            "FLATS": "FLTS" ,
            "FLD" :"FIELD",
            "FLDS" :"FIELDS",
            "FLS" :"FALLS",
            "FLT" :"FLAT",
            "FLTS" :"FLATS",
            "FORD": "FRD" ,
            "FORDS": "FRDS" ,
            "FOREST": "FRST" ,
            "FORGE": "FRG" ,
            "FORGES": "FRGS" ,
            "FORK": "FRK" ,
            "FORKS": "FRKS" ,
            "FORT": "FT" ,
            "FRD" :"FORD",
            "FRDS" :"FORDS",
            "FREEWAY": "FWY" ,
            "FRG" :"FORGE",
            "FRGS" :"FORGES",
            "FRK" :"FORK",
            "FRKS" :"FORKS",
            "FRST" :"FOREST",
            "FRY" :"FERRY",
            "FT" :"FORT",
            "FWY" :"FREEWAY",
            "GARDEN": "GDN" ,
            "GARDENS": "GDNS" ,
            "GATEWAY": "GTWY" ,
            "GDN" :"GARDEN",
            "GDNS" :"GARDENS",
            "GLEN": "GLN" ,
            "GLENS": "GLNS" ,
            "GLN" :"GLEN",
            "GLNS" :"GLENS",
            "GREEN": "GRN" ,
            "GREENS": "GRNS" ,
            "GRN" :"GREEN",
            "GRNS" :"GREENS",
            "GROVE": "GRV" ,
            "GROVES": "GRVS" ,
            "GRV" :"GROVE",
            "GRVS" :"GROVES",
            "GTWY" :"GATEWAY",
            "HARBOR": "HBR" ,
            "HARBORS": "HBRS" ,
            "HAVEN": "HVN" ,
            "HBR" :"HARBOR",
            "HBRS" :"HARBORS",
            "HEIGHTS": "HTS" ,
            "HIGHWAY": "HWY" ,
            "HILL": "HL" ,
            "HILLS": "HLS" ,
            "HL" :"HILL",
            "HLS" :"HILLS",
            "HOLLOW": "HOLW" ,
            "HOLW" :"HOLLOW",
            "HTS" :"HEIGHTS",
            "HVN" :"HAVEN",
            "HWY" :"HIGHWAY",
            "INLET": "INLT" ,
            "INLT" :"INLET",
            "IS" :"ISLAND",
            "ISLAND": "IS" ,
            "ISLANDS": "ISS" ,
            "ISS" :"ISLANDS",
            "JCT" :"JUNCTION",
            "JCTS" :"JUNCTIONS",
            "JUNCTION": "JCT" ,
            "JUNCTIONS": "JCTS" ,
            "KEY": "KY" ,
            "KEYS": "KYS" ,
            "KNL " :"KNOLL",
            "KNLS" :"KNOLLS",
            "KNOLL": "KNL " ,
            "KNOLLS": "KNLS" ,
            "KY" :"KEY",
            "KYS" :"KEYS",
            "LAKE": "LK" ,
            "LAKES": "LKS" ,
            "LANDING": "LNDG" ,
            "LANE": "LN" ,
            "LCK" :"LOCK",
            "LCKS" :"LOCKS",
            "LDG" :"LODGE",
            "LF" :"LOAF",
            "LGT" :"LIGHT",
            "LGTS" :"LIGHTS",
            "LIGHT": "LGT" ,
            "LIGHTS": "LGTS" ,
            "LK" :"LAKE",
            "LKS" :"LAKES",
            "LN" :"LANE",
            "LNDG" :"LANDING",
            "LOAF": "LF" ,
            "LOCK": "LCK" ,
            "LOCKS": "LCKS" ,
            "LODGE": "LDG" ,
            "MANOR": "MNR" ,
            "MANORS": "MNRS" ,
            "MDW" :"MEADOW",
            "MDWS" :"MEADOWS",
            "MEADOW": "MDW" ,
            "MEADOWS": "MDWS" ,
            "MILL": "ML" ,
            "MILLS": "MLS" ,
            "MISSION": "MSN" ,
            "ML" :"MILL",
            "MLS" :"MILLS",
            "MNR" :"MANOR",
            "MNRS" :"MANORS",
            "MOTORWAY": "MTWY" ,
            "MOUNT": "MT" ,
            "MOUNTAIN": "MTN" ,
            "MOUNTAINS": "MTNS" ,
            "MSN" :"MISSION",
            "MT" :"MOUNT",
            "MTN" :"MOUNTAIN",
            "MTNS" :"MOUNTAINS",
            "MTWY" :"MOTORWAY",
            "N": "NORTH",
            "NCK" :"NECK",
            "NECK": "NCK" ,
            "NORTH": "N",
            "OPAS" :"OVERPASS",
            "ORCH" :"ORCHARD",
            "ORCHARD": "ORCH" ,
            "OVERPASS": "OPAS" ,
            "PARK" :"PARKS",
            "PARKS": "PARK" ,
            "PARKWAY": "PKWY" ,
            "PARKWAYS": "PKWY" ,
            "PASSAGE": "PSGE" ,
            "PINE": "PNE " ,
            "PINES": "PNES" ,
            "PKWY" :"PARKWAY",
            "PL" :"PLACE",
            "PLACE": "PL" ,
            "PLAIN": "PLN" ,
            "PLAINS": "PLNS" ,
            "PLAZA": "PLZ" ,
            "PLN" :"PLAIN",
            "PLNS" :"PLAINS",
            "PLZ" :"PLAZA",
            "PNE " :"PINE",
            "PNES" :"PINES",
            "POINT": "PT" ,
            "POINTS": "PTS" ,
            "PORT": "PRT" ,
            "PORTS": "PRTS" ,
            "PR" :"PRAIRIE",
            "PRAIRIE": "PR" ,
            "PRT" :"PORT",
            "PRTS" :"PORTS",
            "PSGE" :"PASSAGE",
            "PT" :"POINT",
            "PTS" :"POINTS",
            "RADIAL": "RADL" ,
            "RADL" :"RADIAL",
            "RANCH": "RNCH" ,
            "RAPID": "RPD" ,
            "RAPIDS": "RPDS" ,
            "RD" :"ROAD",
            "RDG" :"RIDGE",
            "RDGS" :"RIDGES",
            "RDS" :"ROADS",
            "REST": "RST" ,
            "RIDGE": "RDG" ,
            "RIDGES": "RDGS" ,
            "RIV" :"RIVER",
            "RIVER": "RIV" ,
            "RNCH" :"RANCH",
            "ROAD": "RD" ,
            "ROADS": "RDS" ,
            "ROUTE": "RTE" ,
            "RPD" :"RAPID",
            "RPDS" :"RAPIDS",
            "RST" :"REST",
            "RTE" :"ROUTE",
            "S": "SOUTH",
            "SHL" :"SHOAL",
            "SHLS" :"SHOALS",
            "SHOAL": "SHL" ,
            "SHOALS": "SHLS" ,
            "SHORE": "SHR" ,
            "SHORES": "SHRS" ,
            "SHR" :"SHORE",
            "SHRS" :"SHORES",
            "SKWY" :"SKYWAY",
            "SKYWAY": "SKWY" ,
            "SMT" :"SUMMIT",
            "SOUTH": "S",
            "SPG" :"SPRING",
            "SPGS" :"SPRINGS",
            "SPRING": "SPG" ,
            "SPRINGS": "SPGS" ,
            "SPUR" :"SPURS",
            "SPURS": "SPUR" ,
            "SQ" :"SQUARE",
            "SQS" :"SQUARES",
            "SQUARE": "SQ" ,
            "SQUARES": "SQS" ,
            "ST" :"STREET",
            "STA" :"STATION",
            "STATION": "STA" ,
            "STRA" :"STRAVENUE",
            "STRAVENUE": "STRA" ,
            "STREAM": "STRM" ,
            "STREET": "ST" ,
            "STREETS": "STS" ,
            "STRM" :"STREAM",
            "STS" :"STREETS",
            "SUMMIT": "SMT" ,
            "TER" :"TERRACE",
            "TERRACE": "TER" ,
            "THROUGHWAY": "TRWY" ,
            "TPKE" :"TURNPIKE",
            "TRACE": "TRCE" ,
            "TRACK": "TRAK" ,
            "TRAFFICWAY": "TRFY" ,
            "TRAIL": "TRL" ,
            "TRAILER": "TRLR" ,
            "TRAK" :"TRACK",
            "TRCE" :"TRACE",
            "TRFY" :"TRAFFICWAY",
            "TRL" :"TRAIL",
            "TRLR" :"TRAILER",
            "TRWY" :"THROUGHWAY",
            "TUNL" :"TUNNEL",
            "TUNNEL": "TUNL" ,
            "TURNPIKE": "TPKE" ,
            "UN" :"UNION",
            "UNDERPASS": "UPAS" ,
            "UNION": "UN" ,
            "UNIONS": "UNS" ,
            "UNS" :"UNIONS",
            "UPAS" :"UNDERPASS",
            "VALLEY": "VLY" ,
            "VALLEYS": "VLYS" ,
            "VIA" :"VIADUCT",
            "VIADUCT": "VIA" ,
            "VIEW": "VW" ,
            "VIEWS": "VWS" ,
            "VILLAGE": "VLG" ,
            "VILLAGES": "VLGS" ,
            "VILLE": "VL" ,
            "VIS" :"VISTA",
            "VISTA": "VIS" ,
            "VL" :"VILLE",
            "VLG" :"VILLAGE",
            "VLGS" :"VILLAGES",
            "VLY" :"VALLEY",
            "VLYS" :"VALLEYS",
            "VW" :"VIEW",
            "VWS" :"VIEWS",
            "W" :"WEST",
            "WALK" :"WALKS",
            "WALKS": "WALK" ,
            "WELL": "WL " ,
            "WELLS": "WLS",
            "WEST": "W" ,
            "WL " :"WELL",
            "WLS" :"WELLS",
            "XING" :"CROSSING",
            "XRD" :"CROSSROAD",
            "XRDS" :"CROSSROADS"
        }
    return typeof allAbbreviations[word.toUpperCase()] === 'undefined' ? titlecase(word) : titlecase(allAbbreviations[word.toUpperCase()])
}
