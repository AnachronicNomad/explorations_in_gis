grib2_tables_my-notes.md
=====
* All 'Offsets' and 'Lengths' are octets (8-bit bytes)
* Until further exploration, all values are Big-Endian
* Any time somebody says "IA5"/"International Alphabet No. 5"/"ITU-T 50" or
whatever gorram standard, they really mean fraggin ASCII.
* The Indicator Section is always 16 bytes long. 
* The End Section is always 4 bytes long. 
* In effect, both of the above notes mean that a GRIB2 message will always
begin and end, respectively, with the 4-byte encoded strings "GRIB" and "7777"

-- WARNING --
```
    I still need to add all the postfix notes, and include relevant info from
    the relevant notes from the WMO FM92 GRIB2 document. 
```

[0] Indicator Section (16 bytes)
======
| Offset  | Data Type | Content |
| :-----: | :-------: | :------ |
| 0       | ASCII     | 'GRIB'  |
| 6 | uint8 | Discipline |
| 7 | uint8 | GRIB Edition |
| 8 | uint64 | Message Length |

[1] Identification Section
======
| Offset  | Data Type | Content |
| :-----: | :-------: | :------ |
| 0 | uint32 | Length |
| 4 | uint8 | Section Number |
| 5 | uint16 | Orig. Centre ID |
| 7 | uint16 | Orig. Sub-Center ID |
| 9 | uint8 | Master Tables Version |
| 10 | uint8 | Local Tables Version |
| 11 | uint8 | Significance of Reference Time |
| 12 | uint16 | Year |
| 14 | uint8 | Month |
| 15 | uint8 | Day |
| 16 | uint8 | Hour |
| 17 | uint8 | Minute |
| 18 | uint8 | Second |
| 19 | uint8 | Production Status of Processed Data |
| 20 | uint8 | Type of Processed Data |

[3] Grid Definition Section
======
| Offset  | Data Type | Content |
| :-----: | :-------: | :------ |
| 0 | uint32 | Length |
| 4 | uint8 | Section Number |
| 5 | uint8 | Source of Grid Defn. |
| 6 | uint32 | Number of Data Points |
| 10 | uint8 | Length of optional list of numbers (defining # of points) |
| 11 | uint8 | Interpretation of opt. list of numbers (def. # of points ) |
| 12 | uint16 | Grid Defn. Template Number |
| 14 | ??? | Grid Defn. Template |
| ??? | ??? | Optional list of numbers defining number of points |

[4] Product Definition Section 
======
| Offset  | Data Type | Content |
| :-----: | :-------: | :------ |
| 0 | uint32 | Length |
| 4 | uint8 | Section Number |
| 5 | uint16 | Number of coordinate values after Template |
| 7 | uint16 | Product Defn. Template Number |
| 9 | ??? | Product Defn. Template |
| ??? | ??? | Opt. list of coordinate values |

[5] Data Representation Section 
======
| Offset  | Data Type | Content |
| :-----: | :-------: | :------ |
| 0 | uint32 | Length |
| 4 | uint8 | Section Number |
| 5 | uint32 | Number of data points |
| 9 | uint16 | Data Repr. Template Number |
| 11 | ??? | Data Repr. Template |

[6] Bit-Map Section
======
| Offset  | Data Type | Content |
| :-----: | :-------: | :------ |
| 0 | uint32 | Length |
| 4 | uint8 | Section Number |
| 5 | ??? | Bitmap Indicator |
| 6 | ??? | Bitmap - contiguous bits with bit <-> data point correspondance | 

[7] Data Section
======
| Offset  | Data Type | Content |
| :-----: | :-------: | :------ |
| 0 | uint32 | Length |
| 4 | uint8 | Section Number |
| 5 | ??? | Data - format "Data Template 7.X" specified by [5] Data Repr. Template No. |

[8] End Section
======
| Offset  | Data Type | Content |
| :-----: | :-------: | :------ |
| 0 | ASCII | '7777' |
