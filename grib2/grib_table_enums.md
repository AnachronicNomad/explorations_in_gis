grib_table_enums.md
=====
I wanted to keep track of the different enumeration codes for table entries in
the GRIB format.
-----
For reference, I have tried to copy and compile the values from 
[an unofficial NCEP document]
(http://www.nco.ncep.noaa.gov/pmb/docs/grib2/grib2_doc.shtml#disclaimer), 
just to have them all in one place. However, there are numerous
other acronyms and definitions I've found elsewhere; I'll try to edit this to
include those as I find need of them. I've also skipped over some of the enum
codes for the sake of time. 

As noted at the bottom of the above page, the official docs are located [here]
(http://www.wmo.int/pages/prog/www/WMOCodes.html), provided courtesy of the 
World Meteorological Organization.

Naturally, the GRIB(2) format is a little on the dated side compared to the 
FM 94 BUFR and FM 95 CREX formats. I thought I would take it for a spin; just 
to better understand the historical development of these formats and what 
treasured glistening chunks of data may lay inside!

Some modifications and jokes have been left inserted in my transcription, in 
the classic style of monk-ish academics.


[0] Indicator Section 
====== 
 This section serves to identify the start of the record in a human readable
 form, indicate the total length of the message, and indicate the Edition
 number of GRIB used to construct or encode the message. For GRIB2, this
 section is always 16 octets long.

 | Octet Number | Content |
 | :----------: | ------- |
 | 1-4 | 'GRIB' (Coded according to the International Alphabet Number 5) |
 | 5-6 | Reserved |
 | 7 | Discipline (From Table 0.0) |
 | 8 | Edition number - 2 for GRIB2 |
 | 9-16 | Total length of GRIB message in octets (all sections) |
 ___

 ### TABLE 0.0 - Discipline of Processed Data
  | Code Figure | Meaning |
  | :---------: | ------- |
  | 0       | Meterological Products |
  | 1       | Hydrological Products |
  | 2       | Land Surface Products |
  | 3-4     | Space Products |
  | 5-9     | Reserved |
  | 10      | Oceanographic Products |
  | 11-191  | Reserved |
  | 192-254 | Reserved for Local Use |
  | 255     | Missing |
 ---


[1] Identification Section 
====== 
 | Octet Number | Content |
 | :----------: | ------- |
 | 1-4 | Length of the section in octets (21 or N) |
 | 5 | Number of the section (1) |
 | 6-7 | Identification of originating/generating center (See Table 0) (See note 4) |
 | 8-9 | Identification of originating/generating subcenter (See Table C) |
 | 10 | GRIB master tables version number (currently 2) (See Table 1.0) (See note 1) |
 | 11 | Version number of GRIB local tables used to augment Master Tables (see Table 1.1) |
 | 12 | Significance of reference time (See Table 1.2) |
 | 13-14 | Year (4 digits) |
 | 15 | Month |
 | 16 | Day |
 | 17 | Hour |
 | 18 | Minute |
 | 19 | Second |
 | 20 | Production Status of Processed data in the GRIB message (See Table 1.3) |
 | 21 | Type of processed data in this GRIB message (See Table 1.4) |
 | 22-N | Reserved |

 Notes:
 1. Local tables define those parts of the master table which are reserved for local use except for the case described below.  In any case, the use of local tables in the messages are intended for non-local or international exchange is strongly discouraged.
 2. If octet 10 is set to 255 then only local tables are in use.  In this case, the local table version number (octet 11) must not be zero nor missing.  Local tables may include entries from the entire range of the tables.
 3. If octet 11 is zero, octet 10 must contain a valid master table version number and only those parts of the tables not reserved for local use may be used.
 4. If octets 8-9 is zero, Not a sub-center, the originating/generating center is the center defined by octets 6-7. 
 ___

 ### Table 1.0 - GRIB Master Tables Version Number
  | Code Figure | Meaning |
  | :---------: | ------- |
  | 0 | Meterological Products |
  | 1 | Hydrological Products | 
  | 2 | Land Surface Products | 
  | 3 | Space Products | 
  | 4 | Space Products |
  | 5-9 | Reserved | 
  | 10 | Oceanographic Products |
  | 11-191 | Reserved | 
  | 192-254 | Reserved for Local Use | 
  | 255 | Missing |
 ---

 ### Table 1.1 - GRIB Local Tables Version Number
  | Code Figure | Meaning |
  | :---------: | ------- |
  | 0 | Local tables not used.  Only table entries and templates from the current master table are valid. |
  | 1-254 | Number of local table version used. |
  | 255 | Missing |
 ---

 ### TABLE 1.2 - Significance of Reference Time
  | Code Figure | Meaning |
  | :---------: | ------- |
  | 0 | Analysis |
  | 1 | Start of Forecast |
  | 2 | Verifying Time of Forecast |
  | 3 | Observation Time |
  | 4-191 | Reserved |
  | 192-254 | Reserved for Local Use |
  | 255 | Missing |
 ---

 ### Table 1.3 - Production Status of Data
  | Code Figure | Meaning |
  | :---------: | ------- |
  | 0 | Operational Products |
  | 1 | Operational Test Products |
  | 2 | Research Products |
  | 3 | Re-Analysis Products |
  | 4 | THORPEX Interactive Grand Global Ensemble (TIGGE) |
  | 5 | THORPEX Interactive Grand Global Ensemble (TIGGE) test |
  | 6 | S2S Operational Products |
  | 7 | S2S Test Products |
  | 8 | Uncertainties in ensembles of regional reanalysis project (UERRA) |
  | 9 | Uncertainties in ensembles of regional reanalysis project (UERRA) Test |
  | 10-191 | Reserved | 
  | 192-254 | Reserved for Local Use |
  | 255 | Missing |
 ---

 ### Table 1.4 - Type of Data
  | Code Figure | Meaning |
  | :---------: | ------- |
  | 0 | Analysis Products |
  | 1 | Forecast Products |
  | 2 | Analysis and Forecast Products |
  | 3 | Control Forecast Products |
  | 4 | Perturbed Forecast Products | 
  | 5 | Control and Perturbed Forecast Products |
  | 6 | Processed Satellite Observations |
  | 7 | Processed Radar Observations |
  | 8 | Event Probability |
  | 9-191 | Reserved |
  | 192-254 | Reserved for Local Use |
  | 192 | Experimental Products |
  | 255 | Missing |

  Notes:
  * An initialized analysis is considered a zero-hour forecast.
 ---

 ### Table 1.5 - Identification Template Number
  | Code Figure | Meaning |
  | :---------: | ------- |
  | 0 | Calendar Definition |
  | 1 | Paleontological Offset |
  | 2 | Calendar Definition and Paleontological Offset |
  | 3-32767 | Reserved |
  | 32768-65534 | Reserved for Local Use |
  | 65535 | Missing |
 ---
 ///TODO: Add back the Id Templates 1.0-2 for all the Table 1.5 stuff.

 ### Table 1.6 - Type of Calendar
  | Code Figure | Meaning |
  | :---------: | ------- |
  | 0 | Gregorian |
  | 1 | 360-day |
  | 2 | 365-day (see Note 1) |
  | 3 | Proleptic Gregorian (see Note 2) |
  | 4-191 | Reserved |
  | 192-254 | Reserved for Local Use |
  | 255 | Missing |

  Notes:
  1. Essentially a non-leap year
  2. Extends the Gregorian calendar indefinitely in the past
 ---


[2] Local Use Section
======
 | Octet Number | Content |
 | :----------: | ------- |
 | 1-4 | Length of the section in octets (N) |
 | 5 | Number of the section (2) |
 | 6-N | Local Use |

 Notes:
 1. Center=7 (NCEP), subcenter=14(NWS Meteorological Development Laboratory
    (MDL)) used octet 6 to indicate which local use table to use. For MDL,
    octet 6=1 indicates use: ["MDL Template 2.1"]
    (http://www.nco.ncep.noaa.gov/pmb/docs/grib2/grib2_mdl_temp2-1.shtml)
 ___


[3] Grid Definition Section 
====== 
 | Octet Number | Content |
 | :----------: | ------- |
 | 1-4 | Length of the section in octets (nn) |
 | 5 | Number of the section (3) |
 | 6 | Source of grid definition (See Table 3.0) (See note 1 below) |
 | 7-10 | Number of data points |
 | 11 | Number of octets for optional list of numbers defining number of points (See note 2 below) |
 | 12 | Interpetation of list of numbers defining number of points (See Table 3.11) |
 | 13-14 | Grid definition template number (= N) (See Table 3.1) |
 | 15-xx | Grid definition template (See Template 3.N, where N is the grid definition template number given in octets 13-14) |
 | [xx+1]-nn | Optional list of numbers defining number of points (See notes 2, 3, and 4 below) |

 Notes:
 1. If octet 6 is not zero, octets 15-xx (15-nn if octet 11 is zero) may not be supplied.  This should be documented with all bits set to 1 in the grid definition template number.
 2. An optional list of numbers defining number of points is used to document a quasi-regular grid, where the number of points may vary from one row to another.  In such a case, octet 11 is non zero and gives the number octets on which each number of points is encoded.  For all other cases, such as regular grids, octets 11 and 12 are zero and no list is appended to the grid definition template.
 3. If a list of numbers defining the number of points is preset, it is appended at the end of the grid definition template ( or directly after the grid definition number if the template is missing).  When the grid definition template is present, the length is given according to bit 3 of the scanning mode flag octet (length is Nj or Ny for flag value 0).  List ordering is implied by data scanning.
 4. Depending on the code value given in octet 12, the list of numbers either:
   - Corresponds to the coordinate lines as given in the grid definition, or
   - Corresponds to a full circle, or 
   - Does not apply.
 ___

 ### Table 3.0 - Source of Grid Definition
  | Code Figure | Meaning |
  | :---------: | ------- |
  | 0 | Specified in Code Table 3.1 | 
  | 1 | Presdetermined Grid Definition - Defined by Originating Center | 
  | 2-191 | Reserved | 
  | 102-254 | Reserved for Local Use | 
  | 255 | A grid definition does not apply to this product |
 ---

 ### Table 3.1 - Grid Definition Template Number
  | Code Figure | Meaning |
  | :---------: | ------- |
  | 0 | Latitude/Longitude (See Template 3.0) Also called Equidistant Cylindrical or Plate Caree |
  | 1 | Rotated Latitude/Longitude (See Template 3.1) |
  | 2 | Stretched Latitude/Longitude (See Template 3.2) |
  | 3 | Rotated and Stretched Latitude/Longitude (See Template 3.3) |
  | 4 | Variable Resolution Latitude/longitude (See Template 3.4) |
  | 5 | Variable Resolution Rotated Latitude/longitude (See Template 3.5) |
  | 6-9 | Reserved |
  | 10 | Mercator (See Template 3.10) |
  | 11 | Reserved |
  | 12 | Transverse Mercator (See Template 3.12) |
  | 13-19 | Reserved |
  | 20 | Polar Stereographic Projection (Can be North or South) (See Template 3.20) |
  | 21-29 | Reserved |
  | 30 | Lambert Conformal (Can be Secant, Tangent, Conical, or Bipolar) (See Template 3.30) |
  | 31 | Albers Equal Area (See Template 3.31) |
  | 32-39 | Reserved |
  | 40 | Gaussian Latitude/Longitude (See Template 3.40) |
  | 41 | Rotated Gaussian Latitude/Longitude (See Template 3.41) |
  | 42 | Stretched Gaussian Latitude/Longitude (See Template 3.42) |
  | 43 | Rotated and Stretched Gaussian Latitude/Longitude (See Template 3.43) |
  | 44-49 | Reserved |
  | 50 | Spherical Harmonic Coefficients (See Template 3.50) |
  | 51 | Rotated Spherical Harmonic Coefficients (See Template 3.51) |
  | 52 | Stretched Spherical Harmonic Coefficients (See Template 3.52) |
  | 53 | Rotated and Stretched Spherical Harmonic Coefficients (See Template 3.53) |
  | 54-89 | Reserved |
  | 90 | Space View Perspective or Orthographic (See Template 3.90) |
  | 91-99 | Reserved |
  | 100 | Triangular Grid Based on an Icosahedron (See Template 3.100) |
  | 101 | General Unstructured Grid (see Template 3.101) |
  | 102-109 | Reserved |
  | 110 | Equatorial Azimuthal Equidistant Projection (See Template 3.110) |
  | 111-119 | Reserved |
  | 120 | Azimuth-Range Projection (See Template 3.120) |
  | 121-139 | Reserved |
  | 140 | Lambert Azimuthal Equal Area Projection (See Template 3.140) |
  | 141-203 | Reserved |
  | 204 | Curvilinear Orthogonal Grids (See Template 3.204) |
  | 205-999 | Reserved |
  | 1000 | Cross Section Grid with Points Equally Spaced on the Horizontal (See Template 3.1000) |
  | 1001-1099 | Reserved |
  | 1100 | Hovmoller Diagram with Points Equally Spaced on the Horizontal (See Template 3.1100) |
  | 1101-1199 | Reserved |
  | 1200 | Time Section Grid (See Template 3.1200) |
  | 1201-32767 | Reserved |
  | 32768-65534 | Reserved for Local Use |
  | 32768 | Rotated Latitude/Longitude (Arakawa Staggered E-Grid) (See Template 3.32768) |
  | 32769 | Rotated Latitude/Longitude (Arakawa Non-E Staggered Grid) (See Template 3.32769) |
  | 65535 | Missing |
 ---

 ### Table 3.2 - Shape of the Reference System
  | Code Figure | Meaning |
  | :---------: | ------- |
  | 0 | Earth assumed spherical with radius = 6,367,470.0 m
  | 1 | Earth assumed spherical with radius specified (in m) by data producer
  | 2 | Earth assumed oblate spheriod with size as determined by IAU in 1965 (major axis = 6,378,160.0 m, minor axis = 6,356,775.0 m, f = 1/297.0) |
  | 3 | Earth assumed oblate spheriod with major and minor axes specified (in km) by data producer |
  | 4 | Earth assumed oblate spheriod as defined in IAG-GRS80 model (major axis = 6,378,137.0 m, minor axis = 6,356,752.314 m, f = 1/298.257222101) |
  | 5 | Earth assumed represented by WGS84 (as used by ICAO since 1998) (Uses IAG-GRS80 as a basis) |
  | 6 | Earth assumed spherical with radius = 6,371,229.0 m |
  | 7 | Earth assumed oblate spheroid with major and minor axes specified (in m) by data producer |
  | 8 | Earth model assumed spherical with radius 6,371,200 m, but the horizontal datum of the resulting Latitude/Longitude field is the WGS84 reference frame |
  | 9 | Earth represented by the OSGB 1936 Datum, using the Airy_1830 Spheroid, the Greenwich meridian as 0 Longitude, the Newlyn datum as mean sea level, 0 height. |
  | 10-191 | Reserved |
  | 192-254 | Reserved for Local Use |
  | 255 | Missing |
 ---

 ###  Table 3.3 - Resolution and Component Flags
  | Code Figure | Meaning |
  | :---------: | ------- |
 ---

 ###  Table 3.4 - Scanning Mode
  | Code Figure | Meaning |
  | :---------: | ------- |
 ---

 ###  Table 3.5 - Projection Center
  | Code Figure | Meaning |
  | :---------: | ------- |
 ---

 ###  Table 3.6 - Spectral Data Representation Type
  | Code Figure | Meaning |
  | :---------: | ------- |
 ---

 ###  Table 3.7 - Spectral Data Representation Mode
  | Code Figure | Meaning |
  | :---------: | ------- |
 ---

 ###  Table 3.8 - Grid Point Position
  | Code Figure | Meaning |
  | :---------: | ------- |
  | 0 | Grid points at triangle vertices |
  | 1 | Grid points at centers of triangles |
  | 2 | Grid points at midpoints of triangle sides |
  | 3-191 | Reserved |
  | 192-254 | Reserved for Local Use |
  | 255 | Missing |
 ---

 ###  Table 3.9 - Numbering Order of Diamonds
  | Code Figure | Meaning |
  | :---------: | ------- |
 ---

 ###  Table 3.10 - Scanning Mode for One Diamond
  | Code Figure | Meaning |
  | :---------: | ------- |
 ---

 ###  Table 3.11 - Interpretation of List of Numbers at end of section 3
  | Code Figure | Meaning |
  | :---------: | ------- |
  | 0 | There is no appended list |
  | 1 | Numbers define number of points corresponding to full coordinate circles (i.e. parallels).  Coordinate values on each circle are multiple of the circle mesh, and extreme coordinate values given in grid definition may not be reached in all rows. |
  | 2 | Numbers define number of points corresponding to coordinate lines delimited by extreme coordinate values given in grid definition which are present in each row. |
  | 3 | Numbers define the actual latitudes for each row in the grid. The list of numbers are integer values of the valid latitudes in microdegrees (scale by 106) or in unit equal to the ratio of the basic angle and the subdivisions number for each row, in the same order as specified in the "scanning mode flag" (bit no. 2) (see note 2) |
  | 4-254 | Reserved |
  | 255 | Missing |

  Notes:
  1. For entry 1, it should be noted that depending on values of extreme (first/last) coordinates, and regardless of bit-map, effective number of points per row may be less than the number of points on the current circle.
  2. For value for the constant direction increment Di (or Dx) in the accompanying Grid Definition Template should be set to all ones (missing).
 ---

 ###  Table 3.15 - Physical Meaning of Vertical Coordinate
  | Code Figure | Meaning | Unit |
  | :---------: | ------- | ---- |
  | 0-19 | Reserved | |
  | 20 | Temperature | K |
  | 21-99 | Reserved | |
  | 100 | Pressure | Pa |
  | 101 | Pressure deviation from mean sea level | Pa |
  | 102 | Altitude above mean sea level | m |
  | 103 | Height above ground (see Note 1) | m |
  | 104 | Sigma coordinate | |
  | 105 | Hybrid coordinate | |
  | 106 | Depth below land surface | m |
  | 107 | Potential temperature (theta) | K |
  | 108 | Pressure deviation from ground to level | Pa |
  | 109 | Pressure deviation from ground to level | Pa |
  | 109 | Potential vorticity | K m-2 kg-1 s-1 |
  | 110 | Geometric height | m |
  | 111 | Eta coordinate (see Note 2) | |
  | 112 | Geopotential height | gpm |
  | 113 | Logarithmic hybrid coordinate | |
  | 114-159 | Reserved | |
  | 160 | Depth below sea level | m |
  | 161-191 | Reserved | |
  | 192-254 | Reserved for Local Use | |
  | 255 | Missing | |

  Notes: 
  1. Negative values associate to this coordinate will indicate depth below ground surface.  If values are all below the surface, use of entry 10^6 is recommended with positive coordinate values instead.
  2. The Eta vertical coordinate system involves normalizing the pressure at some point on a specific level by the mean sea level pressure at that point.
 ---

 ###  Table 3.20 - Type of Horizontal Line
  | Code Figure | Meaning |
  | :---------: | ------- |
  | 0 | Rhumb |
  | 1 | Great Circle |
  | 2-191 | Reserved | 
  | 192-254 | Reserved for Local Use |
  | 255 | Missing |
 ---

 ###  Table 3.21 - Vertical Dimension Coordinate Values Definition
  | Code Figure | Meaning |
  | :---------: | ------- |
  | 0 | Explicit coordinate values set |
  | 1 | Linear coordinates </br>  f(1) = C1 </br>   f(n) = f(n-1) + C2 |
  | 2-10 | Reserved |
  | 11 | Geometric coordinates </br>   f(1) = C1 </br>   f(n) = C2 x f(n-1) |
  | 12-191 | Reserved |
  | 192-254 | Reserved for Local Use |
  | 255 | Missing |
 ---


[4] Product Definition Section 
====== 
 | Octet Number | Content |
 | :----------: | ------- |
 | 1-4 | Length of the section in octets (nn) |
 | 5 | Number of the section (4) |
 | 6-7 | Number of coordinate values after template (See note 1 below) |
 | 8-9 | Product definition template number (See Table 4.0) |
 | 10-xx | Product definition template (See product template 4.X, where X is the number given in octets 8-9) |
 | [xx+1]-nn | Optional list of coordinate values (See notes 2 and 3 below) |

 Notes: 
 1. Coordinate values are intended to document the vertical discretization associated with model data on hybrid coordinate vertical levels.  A value of zero in octets 6-7 indicates that no such values are present.  Otherwise the number corresponds to the whole set of values.
 2. Hybrid systems employ a means of representing vertical coordinates in terms of a mathematical combination of pressure and sigma coordinates.  When used in conjunction with a surface pressure field and an appropriate mathematical expression, the vertical coordinate parameters may be used to interpret the hybrid vertical coordinate.
 3. Hybrid coordinate values, if present, should be encoded in IEEE 32-bit floating point format.  They are intended to be encoded as pairs.
 ___

 ### Table 4.0 - Product Definition Template Number
  | Code Figure | Meaning |
  | :---------: | ------- |
  | 0 | Analysis or forecast at a horizontal level or in a horizontal layer at a point in time.  (see Template 4.0) |
  | 1 | Individual ensemble forecast, control and perturbed, at a horizontal level or in a horizontal layer at a point in time.  (see Template 4.1) |
  | 2 | Derived forecasts based on all ensemble members at a horizontal level or in a horizontal layer at a point in time.  (see Template 4.2) |
  | 3 | Derived forecasts based on a cluster of ensemble members over a rectangular area at a horizontal level or in a horizontal layer at a point in time.  (see Template 4.3) |
  | 4 | Derived forecasts based on a cluster of ensemble members over a circular area at a horizontal level or in a horizontal layer at a point in time.  (see Template 4.4) |
  | 5 | Probability forecasts at a horizontal level or in a horizontal layer at a point in time.  (see Template 4.5) |
  | 6 | Percentile forecasts at a horizontal level or in a horizontal layer at a point in time.  (see Template 4.6) |
  | 7 | Analysis or forecast error at a horizontal level or in a horizontal layer at a point in time.  (see Template 4.7) |
  | 8 | Average, accumulation, extreme values or other statistically processed values at a horizontal level or in a horizontal layer in a continuous or non-continuous time interval.  (see Template 4.8) |
  | 9 | Probability forecasts at a horizontal level or in a horizontal layer in a continuous or non-continuous time interval.  (see Template 4.9) |
  | 10 | Percentile forecasts at a horizontal level or in a horizontal layer in a continuous or non-continuous time interval.  (see Template 4.10) |
  | 11 | Individual ensemble forecast, control and perturbed, at a horizontal level or in a horizontal layer, in a continuous or non-continuous time interval.  (see Template 4.11) |
  | 12 | Derived forecasts based on all ensemble members at a horizontal level or in a horizontal layer, in a continuous or non-continuous time interval.  (see Template 4.12) |
  | 13 | Derived forecasts based on a cluster of ensemble members over a rectangular area at a horizontal level or in a horizontal layer, in a continuous or non-continuous time interval.  (see Template 4.13) |
  | 14 | Derived forecasts based on a cluster of ensemble members over a circular area at a horizontal level or in a horizontal layer, in a continuous or non-continuous time interval.  (see Template 4.14) |
  | 15 | Average, accumulation, extreme values or other statistically-processed values over a spatial area at a horizontal level or in a horizontal layer at a point in time.  (see Template 4.15) |
  | 16-19 | Reserved | 
  | 20 | Radar product  (see Template 4.20) |
  | 21-29 | Reserved |
  | 30 | Satellite product  (see Template 4.30) NOTE: This template is deprecated. Template 4.31 should be used instead. |
  | 31 | Satellite product  (see Template 4.31) |
  | 32 | Analysis or forecast at a horizontal level or in a horizontal layer at a point in time for simulate (synthetic) staellite data (see Template 4.32) |
  | 33 | Individual Ensemble Forecast, control and perturbed, at a horizontal level or in a horizontal layer at a point in time for simulated (synthetic) satellite data (see Template 4.33) |
  | 34 | Individual Ensemble Forecast, control and perturbed, at a horizontal level or in a horizontal layer, in a continuous or non-continuous interval for simulated (synthetic) satellite data(see Template 4.34) |
  | 35-39 | Reserved |
  | 40 | Analysis or forecast at a horizontal level or in a horizontal layer at a point in time for atmospheric chemical constituents.  (see Template 4.40) |
  | 41 | Individual ensemble forecast, control and perturbed, at a horizontal level or in a horizontal layer at a point in time for atmospheric chemical constituents.  (see Template 4.41) |
  | 42 | Average, accumulation, and/or extreme values or other statistically processed values at a horizontal level or in a horizontal layer in a continuous or non-continuous time interval for atmospheric chemical constituents.  (see Template 4.42) |
  | 43 | Individual ensemble forecast, control and perturbed, at a horizontal level or in a horizontal layer, in a continuous or non-continuous time interval for atmospheric chemical constituents.  (see Template 4.43) |
  | 44 | Analysis or forecast at a horizontal level or in a horizontal layer at a point in time for aerosol.  (see Template 4.44) |
  | 45 | Individual ensemble forecast, control and perturbed, at a horizontal level or in a horizontal layer, in a continuous or non-continuous time interval for aerosol.  (see Template 4.45) |
  | 46 | Average, accumulation, and/or extreme values or other statistically processed values at a horizontal level or in a horizontal layer in a continuous or non-continuous time interval for aerosol.  (see Template 4.46) |
  | 47 | Individual ensemble forecast, control and perturbed, at a horizontal level or in a horizontal layer, in a continuous or non-continuous time interval for aerosol.  (see Template 4.47) |
  | 48 | Analysis or forecast at a horizontal level or in a horizontal layer at a point in time for aerosol.  (see Template 4.48) |
  | 49-50 | Reserved |
  | 51 | Categorical forecast at a horizontal level or in a horizontal layer at a point in time.  (see Template 4.51) |
  | 52 | Reserved |
  | 53 | Partitioned parameters at a horizontal level or horizontal layer at a point in time.  (see Template 4.53) |
  | 54 | Individual ensemble forecast, control and perturbed, at a horizontal level or in a horizontal layer at a point in time for partitioned parameters.   (see Template 4.54) |
  | 55 | Spatio-temporal changing tiles at a horizontal level or horizontal layer at a point in time (see Template 4.55) |
  | 56 | Individual ensemble forecast, control and perturbed, at a horizontal level or in a horizontal layer at a point in time for spatio-temporal changing tile parameters.   (see Template 4.56) |
  | 57 | Analysis or forecast at a horizontal level or in a horizontal layer at a point in time for atmospheric chemical constituents based on a distribution function (see Template 4.57) |
  | 58-59 | Reserved |
  | 60 | Individual Ensemble Reforecast, control and perturbed, at a horizontal level or in a horizontal layer at a point in time (see Template 4.60) |
  | 61 | Individual Ensemble Reforecast, control and perturbed, at a horizontal level or in a horizontal layer, in a continuous or non-continuous time interval (see Template 4.61) |
  | 62-90 | Reserved |
  | 91 | Categorical forecast at a horizontal level or in a horizontal layer in a continuous or non-continuous time interval.  (see Template 4.91) |
  | 92-253 | Reserved |
  | 254 | CCITT IA5 character string  (see Template 4.254) |
  | 255-999 | Reserved |
  | 1000 | Cross-section of analysis and forecast at a point in time.  (see Template 4.1000) |
  | 1001 | Cross-section of averaged or otherwise statistically processed analysis or forecast over a range of time.  (see Template 4.1001) |
  | 1002 | Cross-section of analysis and forecast, averaged or otherwise statistically-processed over latitude or longitude.  (see Template 4.1002) |
  | 1003-1099 | Reserved |
  | 1100 | Hovmoller-type grid with no averaging or other statistical processing  (see Template 4.1100) |
  | 1101 | Hovmoller-type grid with averaging or other statistical processing  (see Template 4.1101) |
  | 1102-32767 | Reserved |
  | 32768-65534 | Reserved for Local Use |
  | 65535 | Missing |
 ---

 ### Table 4.1 - Parameter Catagory by Product Discipline
 #### Product Discipline 0 - Meterological Products
  | Category    | Description |
  | :---------: | ----------- |
  | 0 | Temperature (see Table 4.2-0-0) | 
  | 1 | Moisture (see Table 4.2-0-1) | 
  | 2 | Momentum (see Table 4.2-0-2) | 
  | 3 | Mass (see Table 4.2-0-3) | 
  | 4 | Short-wave radiation (see Table 4.2-0-4) | 
  | 5 | Long-wave radiation (see Table 4.2-0-5) | 
  | 6 | Cloud (see Table 4.2-0-6) |
  | 7 | Themodynamic Stability indicies (see Table 4.2-0-7) | 
  | 8 | Kinematic Stability indicies |
  | 9 | Temperature Probabilities* | 
  | 10 | Moisture Probabilities* |
  | 11 | Momentum Probabilities* |
  | 12 | Mass Probabilities* |
  | 13 | Aerosols (see Table 4.2-0-13) |
  | 14 | Trace gases (e.g. Ozone, CO_2) (see Table 4.2-0-14) |
  | 15 | Radar (see Table 4.2-0-15) |
  | 16 | Forecast Radar Imagery (see Table 4.2-0-16) |
  | 17 | Electrodynamics (see Table 4.2-0-17) |
  | 18 | Nuclear/radiology (see Table 4.2-0-18) |
  | 19 | Physical atmospheric properties (see Table 4.2-0-19) |
  | 20 | Atmospheric Chemical Constituents (see Table 4.2-0-20) |
  | 21-189 | Reserved |
  | 190 | CCITT IA5 string (see Table 4.2-0-190) |
  | 191 | Miscellaneous (see Table 4.2-0-191) |
  | 192 | Covariance (see Table 4.2-0-192) |
  | 192-254 | Reserved for Local Use |
  | 255 | Missing |

  Notes:
  * Entries 9, 10, 11 and 12 are deprecated.

 #### Product Discipline 1 - Hydrological Products
  | Category    | Description |
  | :---------: | ----------- |
  | 0 | Hydrology basic products (see Table 4.2-1-0) |
  | 1 | Hydrology probabilities (see Table 4.2-1-1) |
  | 2 | Inland water and sediment properties (see Table 4.2-1-2) |
  | 3-191 | Reserved |
  | 192-254 | Reserved for Local Use |
  | 255 | Missing |

 #### Product Discipline 2 - Land Surface Products
  | Category    | Description |
  | :---------: | ----------- |
  | 0 | Vegetation/Biomass (see Table 4.2-2-0) |
  | 1 | Agricultural Aquacultural Special Products (see Table 4.2-2-1) |
  | 2 | Transportation-related Products (see Table 4.2-2-2) |
  | 3 | Soil Products (see Table 4.2-2-3) |
  | 4 | Fire Weather Products (see Table 4.2-2-4) |
  | 5 | Land Surface Products (see Table 4.2-2-5) |
  | 6-191 | Reserved |
  | 192-254 | Reserved for Local Use |
  | 255 | Missing |

 #### Product Discipline 3 - Space Products
  | Category    | Description |
  | :---------: | ----------- |
  | 0 | Image Format Products (See note 1) (see Table 4.2-3-0) | 
  | 1 | Quantitative products (See note 2) (see Table 4.2-3-1) |
  | 2 | Cloud Properties (see Table 4.2-3-2) |
  | 3 | Flight Rules Conditions (see Table 4.2-3-3) |
  | 4 | Volcanic Ash (see Table 4.2-3-4) |
  | 5 | Sea-surface Temperature (see Table 4.2-3-5) |
  | 6 | Solar Radiation (see Table 4.2-3-6) |
  | 7-191 | Reserved
  | 192 | Forecast Satellite Imagery (See note 2) (see Table 4.2-3-192) |
  | 192-254 | Reserved for Local Use |
  | 255 | Missing |

  Notes:
  1. Data are numeric without units, although they might be given quantitative
    meaning through a code table defined external to this document.  The
    emphasis is on a displayable "picture" of some phenomenon, perhaps with
    certain enhanced features.  Generally, each datum is an unsigned, one
    octet integer, but some images format products might have another datum
    size.  The size of the datum is indicated in Section 5 of the GRIB2
    message.
  2. Data are in specified physical units.

 #### Product Discipline 4 - Space Weather Products (Validation)
  | Category    | Description |
  | :---------: | ----------- |
  | 0 | Temperature (see Table 4.2-4-0) |
  | 1 | Momentum (see Table 4.2-4-1) |
  | 2 | Charged Particle Mass and Number (see Table 4.2-4-2) |
  | 3 | Electric and Magnetic Fields (see Table 4.2-4-3) |
  | 4 | Energetic Particles (see Table 4.2-4-4) |
  | 5 | Waves (see Table 4.2-4-5) |
  | 6 | Solar Electromagnetic Emissions (see Table 4.2-4-6) |
  | 7 | Terrestrial Electromagnetic Emissions (see Table 4.2-4-7) |
  | 8 | Imagery (see Table 4.2-4-8) |
  | 9 | Ion-Netral Coupling (see Table 4.2-4-9) |
  | 10-191 | Reserved |
  | 192-254 | Reserved for Local Use |
  | 255 | Missing |

 #### Product Discipline 10 - Oceanographic Products
  | Category    | Description |
  | :---------: | ----------- |
  | 0 | Waves (see Table 4.2-10-0) |
  | 1 | Currents (see Table 4.2-10-1) |
  | 2 | Ice (see Table 4.2-10-1) |
  | 3 | Surface Properties (see Table 4.2-10-3) |
  | 4 | Sub-surface Properties (see Table 4.2-10-4) |
  | 5-190 | Reserved |
  | 191 | Miscellaneous (see Table 4.2-10-191) |
  | 192-254 | Reserved for Local Use |
  | 255 | Missing |

 ### Table 4.2 - Parameter Number by Product Discipline and Parameter Category
  [[ This looks mostly like a duplicate of Table 4.1 ]]

  Notes:
  1. By convention, the flux sign is positive if downward.
  2. When a new parameter is to be added to Code table 4.2 and more than one
    category applies, the choice of category should be made base on the
    intended use of product. The discipline and category are an important
    part of any product definition, so it is possible to have the same
    parameter name in more than one category. For example, "Water
    Temperature" in discipline 10 (Oceanographic Products), category 4 (sub-
    surface properties) is used to reporting water temperature in the ocean
    or open sea, and is not the same as "Water temperature" in discipline 1
    (Hydrological Products), category 2 (Inland water and sediment
    properties) which is used for reporting water temperature in freshwater
    lakes and rivers.
 ---

 ### Table 4.3 - Type of Generating Process
  | Code Figure | Meaning |
  | :---------: | ------- |
  | 0 | Analysis |
  | 1 | Initialization | 
  | 2 | Forecast |
  | 3 | Bias Corrected Forecast |
  | 4 | Ensemble Forecast |
  | 5 | Probability Forecast |
  | 6 | Forecast Error |
  | 7 | Analysis Error |
  | 8 | Observation |
  | 9 | Climatological |
  | 10 | Probability-Weighted Forecast |
  | 11 | Bias-Corrected Ensemble Forecast |
  | 12 | Post-processed Analysis (See note) |
  | 13 | Post-processed Forecast (See note) |
  | 14 | Nowcast |
  | 15 | Hindcast |
  | 16 | Physical Retrieval |
  | 17 | Regression Analysis |
  | 18 | Difference Between Two Forecasts |
  | 19-191 | Reserved |
  | 192-254 | Reserved for Local Use |
  | 192 | Forecast Confidence Indicator |
  | 193 | Probability-mathced Mean |
  | 194 | Neighborhood Probability |
  | 195 | Bias-Corrected and Downscaled Ensemble Forecast |
  | 196 | Perturbed Analysis for Ensemble Initialization |
  | 255 | Missing |

  Notes: 
  1. Code figures 12 and 13 are intended in cases where code figures 0 and 2
    may not be sufficient to indicate that significant post-processing has
    taken place on an intial analysis or forecast output.
 ---

 ### Table 4.4 - Indicator of Unit of Time Range
  | Code Figure | Meaning |
  | :---------: | ------- |
  | 0 | Minute | 
  | 1 | Hour |
  | 2 | Day | 
  | 3 | Month |
  | 4 | Year |
  | 5 | Decade (10 Years) |
  | 6 | Normal (30 Years) |
  | 7 | Century (100 Years) |
  | 8 | Reserved | 
  | 9 | Reserved |
  | 10 | 3 Hours | 
  | 11 | 6 Hours |
  | 12 | 12 Hours |
  | 13 | Second |
  | 14-191 | Reserved | 
  | 192-254 | Reserved for Local Use |
  | 255 | Missing |
 ---

 ### Table 4.5 - Fixed Surface Types and Units
  | Code Figure | Meaning | Units |
  | :---------: | ------- | :---- |
  | 0 | Reserved | |
  | 1 | Ground or Water Surface | | 
  | 2 | Cloud Base Level | | 
  | 3 | Level of Cloud Tops | |
  | 4 | Level of 0°C Isotherm | |
  | 5 | Level of Adiabatic Condensation Lifted from the Surface | |
  | 6 | Maximum Wind Level | | 
  | 7 | Tropopause | |
  | 8 | Nominal Trop of the Atmosphere | | 
  | 9 | Sea Bottom | | 
  | 10 | Entire Atmosphere | | 
  | 11 | Cumulonimbus Base (CB) | m | 
  | 12 | Cumulonimbus Top (CT) | m |
  | 13 | Lowest level where vertically integrated cloud cover exceeds the specified percentage (cloud base for a given percentage cloud cover) | % |
  | 14 | Level of free convection (LFC) | | 
  | 15 | Convection condensation level (CCL) | | 
  | 16 | Level of neutral buoyancy or equilibrium (LNB) | |
  | 17-19 | Reserved |
  | 20 | Isothermal Level | K |
  | 21 | Lowest level where mass density exceeds the specified value (base for a given threshold of mass density) | kg m-3 |
  | 22 | Highest level where mass density exceeds the specified value (top for a given threshold of mass density) | kg m-3 |
  | 23 | Lowest level where air concentration exceeds the specified value (base for a given threshold of air concentration | Bq m-3 |
  | 24 | Highest level where air concentration exceeds the specified value (top for a given threshold of air concentration) | Bq m-3 |
  | 25-99 | Reserved | | 
  | 100 | Isobaric Surface | Pa |
  | 101 | Mean Sea Level | |
  | 102 | Specific Altitude Above Mean Sea Level | m |
  | 103 | Specified Height Level Above Ground | m |
  | 104 | Sigma Level | |
  | 105 | Hybrid Level | |
  | 106 | Depth Below Land Surface | m |
  | 107 | Isentropic (theta) Level | K |
  | 108 | Level at Specified Pressure Difference from Ground to Level | Pa |
  | 109 | Potential Vorticity Surface | K m2 kg-1 s-1 |
  | 110 | Reserved | |
  | 111 | Eta Level | | 
  | 112 | Reserved | |
  | 113 | Logarithmic Hybrid Level | | 
  | 114 | Snow Level | Numeric |
  | 115 | Sigma height level (See Note 4) | |
  | 116 | Reserved | |
  | 117 | Mixed Layer Depth | m |
  | 118 | Hybrid Height Level | | 
  | 119 | Hybrid Pressure Level | | 
  | 120-149 | Reserved | |
  | 150 | Generalized Vertical Height Coordinate (see Note 4) | |
  | 151 | Soil level (See Note 5) | |
  | 152-159 | Reserved | |
  | 160 | Depth Below Sea Level | m |
  | 161 | Depth Below Water Surface | m |
  | 162 | Lake or River Bottom | |
  | 163 | Bottom Of Sediment Layer | |
  | 164 | Bottom Of Thermally Active Sediment Layer | | 
  | 165 | Bottom of Sediment Layer Penetrated By Thermal Wave | |
  | 166 | Maxing Layer | |
  | 167 | Bottom of Root Zone | |
  | 168-173 | Reserved | |
  | 174 | Top Surface of Ice on Sea, Lake or River | |
  | 175 | Top Surface of Ice, under Snow, on Sea, Lake or River | |
  | 176 | Bottom Surface (underside) Ice on Sea, Lake or River | |
  | 177 | Deep Soil (of indefinite depth) | |
  | 178 | Reserved | |
  | 179 | Top Surface of Glacier Ice and Inland Ice | |
  | 180 | Deep Inland or Glacier Ice (of indefinite depth) | | 
  | 181 | Grid Tile Land Fraction as a Model Surface | |
  | 182 | Grid Tile Water Fraction as a Model Surface | |
  | 183 | Grid Tile Ice Fraction on Sea, Lake or River as a Model Surface | |
  | 184 | Grid Tile Glacier Ice and Inland Ice Fraction as a Model Surface | |
  | 185-191 | Reserved | | 
  | 192-254 | Reserved for Local Use | |
  | 200 | Entire atmosphere (considered as a single layer) | |
  | 201 | Entire ocean (considered as a single layer) | |
  | 204 | Highest tropospheric freezing level | |
  | 206 | Grid scale cloud bottom level | |
  | 207 | Grid scale cloud top level | |
  | 209 | Boundary layer cloud bottom level | |
  | 210 | Boundary layer clodu top level | |
  | 211 | Boundary layer cloud layer | |
  | 212 | Low cloud bottom level | |
  | 213 | Low cloud top level | |
  | 214 | Low cloud level | |
  | 215 | Cloud ceiling | |
  | 220 | Planetary Boundary Layer | |
  | 221 | Layer Between Two Hybrid Levels | |
  | 222 | Middle cloud bottom level | |
  | 223 | Middle cloud top level | |
  | 224 | Middle cloud layer | |
  | 232 | High cloud bottom level | |
  | 233 | High cloud top level | |
  | 224 | High cloud layer | |
  | 235 | Ocean Isotherm Level (1/10 °C) | |
  | 236 | Layer between two depths below ocean surface | |
  | 237 | Bottom of Ocean Mixed Layer (m) | |
  | 238 | Bottom of Ocean Isothermal Layer (m) | |
  | 239 | Layer Ocean Surface and 26C Ocean Isothermal Level | |
  | 241 | Ordered Sequence of Data |
  | 242 | Convective cloud bottom level | |
  | 243 | Convective cloud top level | |
  | 244 | Convective cloud layer | |
  | 245 | Lowest level of the wet bulb zero | |
  | 246 | Maximum equivalent potential temperature level | |
  | 247 | Equilibrium level |
  | 248 | Shallow convective cloud bottom level | |
  | 249 | Shallow convective cloud top level | |
  | 251 | Deep convective cloud bottom level | |
  | 252 | Deep convective cloud top level | |
  | 253 | Lowest bottom level of supercooled liquid water layer | |
  | 254 | Highest top level of supercooled liquied water layer | |
  | 255 | Missing | |

  Notes: 
  1. The Eta vertical coordinate system involves normalizing the pressure at some point on a specific level by the mean sea level pressure at that point.
  2. Hybrid height level (Code figure 118) can be defined as: z(k)=A(k)+B(k)* orog (k=1,..., NLevels; orog=orography; z(k)=height in meters at level(k)
  3. Hybrid pressure level, for which code figure 119 shall be used insteaf of 105, can be defined as: p(k)=A(k) + B(k) * sp (k=1,...,NLevels, sp=surface pressure; p(k)=pressure at level (k)
  4. Sigma height level is the vertical model level of the height-based terrain-following coordinate (Gal-Chen and Somerville, 1975). The value of the level = (height of the level – height of the terrain) / (height of the top level – height of the terrain), which is ≥ 0 and ≤ 1.
  5. The definition of a generalized vertical height coordinate implies the absence of coordinate values in section 4 but the presence of an external 3D-GRIB message that specifies the height of every model grid point in meters (see Notes for section 4), i.e., this GRIB message will contain the field with discipline = 0, category = 3, parameterm = 6 (Geometric height).
  6. The soil level represents a model level for which the depth is not constant across the model domain. The depth in metres of the level is provided by another GRIB message with the parameter "Soil Depth" with discipline 2, category 3 and parameter number 27. 
 ---

 ### Table 4.6 - Type of Ensemble Forecast
  | Code Figure | Meaning |
  | :---------: | ------- |
  | 0 | Unperturbed High-Resolution Control Forecast |
  | 1 | Unperturbed Low-Resolution Control Forecast |
  | 2 | Negatively Perturbed Forecast |
  | 3 | Positively Perturbed Forecast |
  | 4 | Multi-Model Forecast |
  | 5-191 | Reserved | 
  | 192-254 | Reserved for Local Use |
  | 192 | Perturbed Ensemble Member |
  | 255 | Missing |
 ---

 ### Table 4.7 - Derived Forecast
  | Code Figure | Meaning |
  | :---------: | ------- |
  | 0 | Unweighted Mean of All Members |
  | 1 | Weighted Mean of All Members |
  | 2 | Standard Deviation w.r.t. Cluster Mean |
  | 3 | Standard Deviation w.r.t. Cluster Mean, Normalized |
  | 4 | Spread of All Members |
  | 5 | Large Anomaly Index of All Members (see Note 1) | 
  | 6 | Unweighted Mean of the Cluster Members |
  | 7 | Interquartile Range (Range between the 25th and 75th quartile) |
  | 8 | Minimum Of All Ensemble Members (see Note 2) |
  | 9 | Maximum Of All Ensemble Members (see Note 2) |
  | 7-191 | Reserved |
  | 192-254 | Reserved for Local Use |
  | 192 | Unweighted Mode of All Members |
  | 193 | Percentile value (10%) of All Members |
  | 194 | Percentile value (50%) of All Members |
  | 195 | Percentile value (90%) of All Members |
  | 196 | Statistically decided weights for each ensemble member |
  | 197 | Climate Percentile (percentile values from climate distribution) |
  | 198 | Deviation of Ensemble Mean from Daily Climatology |
  | 199 | Extreme Forecast Index |
  | 255 | Missing |

  Notes:
  1.  Large anomaly index is defined as {(number of members whose anomaly is higher than 0.5*SD) - (number of members whose anomaly is lower than -0.5*SD)}/(number of members) at each grid point.  SD is the observed climatological standard deviation.
  2.  It should be noted that the reference for "minimum of all ensemble members" and "maximum of all ensemble members" is the set of ensemble members and not a time interval and should not be confused with the maximum and minimum described by Product Definition Template 4.8.
 ---

 ### Table 4.8 - Clustering Method
  | Code Figure | Meaning |
  | :---------: | ------- |
  | 0 | Anomaly Correlation |
  | 1 | Root Mean Square |
  | 2-191 | Reserved |
  | 192-254 | Reserved for Local Use |
  | 255 | Missing |
 ---

 ### Table 4.9 - Probability Type
  | Code Figure | Meaning |
  | :---------: | ------- |
  | 0 | Probability of event below upper limit |
  | 1 | Probability of event above upper limit | 
  | 2 | Probability of event between upper and lower limits (the range includes lower limit but not the upper limit) |
  | 3 | Probability of event above lower limit |
  | 4 | Probability of event below upper limit |
  | 5-191 | Reserved |
  | 192-254 | Reserved for Local Use |
  | 255 | Missing |
 ---

 ### Table 4.10 - Type of Statistical Processing
  | Code Figure | Meaning |
  | :---------: | ------- |
  | 0 | Average | 
  | 1 | Accumulation (see Note 1) |
  | 2 | Maximum |
  | 3 | Minimum |
  | 4 | Difference (value at the end of the time range minus value at the beginning) |
  | 5 | Root Mean Square |
  | 6 | Standard Deviation |
  | 7 | Covariance (temporal variance) (see Note 2) |
  | 8 | Difference (value at the beginning of the time range minus value at the end) |
  | 9 | Ratio (see Note 3) |
  | 10 | Standardized Anomaly |
  | 11 | Summation |
  | 12 | Confidence Index (see Note 4)  Validation |
  | 13 | Quality Indicator (see Note 5) Validation |
  | 14-191 | Reserved |
  | 192-254 | Reserved for Local Use |
  | 192 | Climatological Mean Value: multiple year averages of quantities which are themselves means over some period of time (P2) less than a year. The reference time (R) indicates the date and time of the start of a period of time, given by R to R + P2, over which a mean is formed; N indicates the number of such period-means that are averaged together to form the climatological value, assuming that the N period-mean fields are separated by one year. The reference time indicates the start of the N-year climatology. N is given in octets 22-23 of the PDS. </br></br> If P1 = 0 then the data averaged in the basic interval P2 are assumed to be continuous, i.e., all available data are simply averaged together. </br></br> If P1 = 1 (the units of time - octet 18, code table 4 - are not relevant here) then the data averaged together in the basic interval P2 are valid only at the time (hour, minute) given in the reference time, for all the days included in the P2 period. The units of P2 are given by the contents of octet 18 and Table 4. |
  | 193 | Average of N forecasts (or initialized analyses); each product has forecast period of P1 (P1=0 for initialized analyses); products have reference times at intervals of P2, beginning at the given reference time. |
  | 194 | Average of N uninitialized analyses, starting at reference time, at intervals of P2. |
  | 195 | Average of forecast accumulations. P1 = start of accumulation period. P2 = end of accumulation period. Reference time is the start time of the first forecast, other forecasts at 24-hour intervals. Number in Ave = number of forecasts used. |
  | 196 | Average of successive forecast accumulations. P1 = start of accumulation period. P2 = end of accumulation period. Reference time is the start time of the first forecast, other forecasts at (P2 - P1) intervals. Number in Ave = number of forecasts used |
  | 197 | Average of forecast averages. P1 = start of averaging period. P2 = end of averaging period. Reference time is the start time of the first forecast, other forecasts at 24-hour intervals. Number in Ave = number of forecast used |
  | 198 | Average of successive forecast averages. P1 = start of averaging period. P2 = end of averaging period. Reference time is the start time of the first forecast, other forecasts at (P2 - P1) intervals. Number in Ave = number of forecasts used |
  | 199 | Climatological Average of N analyses, each a year apart, starting from initial time R and for the period from R+P1 to R+P2. |
  | 200 | Climatological Average of N forecasts, each a year apart, starting from initial time R and for the period from R+P1 to R+P2. |
  | 201 | Climatological Root Mean Square difference between N forecasts and their verifying analyses, each a year apart, starting with initial time R and for the period from R+P1 to R+P2. |
  | 202 | Climatological Standard Deviation of N forecasts from the mean of the same N forecasts, for forecasts one year apart. The first forecast starts wtih initial time R and is for the period from R+P1 to R+P2. |
  | 203 | Climatological Standard Deviation of N analyses from the mean of the same N analyses, for analyses one year apart. The first analyses is valid for  period R+P1 to R+P2. |
  | 204 | Average of forecast accumulations. P1 = start of accumulation period. P2 = end of accumulation period. Reference time is the start time of the first forecast, other forecasts at 6-hour intervals. Number in Ave = number of forecast used |
  | 205 | Average of forecast averages. P1 = start of averaging period. P2 = end of averaging period. Reference time is the start time of the first forecast, other forecasts at 6-hour intervals. Number in Ave = number of forecast used | 
  | 206 | Average of forecast accumulations. P1 = start of accumulation period. P2 = end of accumulation period. Reference time is the start time of the first forecast, other forecasts at 12-hour intervals. Number in Ave = number of forecast used |
  | 207 | Average of forecast averages. P1 = start of averaging period. P2 = end of averaging period. Reference time is the start time of the first forecast, other forecasts at 12-hour intervals. Number in Ave = number of forecast used |
  | 208 | Variance |
  | 209 | Coefficient |
  | 255 | Missing |

  Notes:

  1.  The original data value (Y in the note 4 of regulation 92.9.4) has units of Code table 4.2 multiplied by second, unless otherwise noted on Code table 4.2.
  2.  The original data value has squared units of Code table 4.2.
  3.  The original data value is non-dimensional number without units.
  4.  The original data value is non-dimensional number from 0 to 1, where 0 indicates no confidence and 1 indicates maximal confidence.
  5.  The original data value is defined by Code Table 4.244.
 ---

 ### Table 4.11 - Type of Time Intervals
  | Code Figure | Meaning |
  | :---------: | ------- |
  | 0 | Reserved |
  | 1 | Successive times processed have same forecast time, start time of forecast is incremented. |
  | 2 | Successive times processed have same start time of forecast, forecast time is incremented. |
  | 3 | Successive times processed have start time of forecast incremented and forecast time decremented so that valid time remains constant. |
  | 4 | Successive times processed have start time of forecast decremented and forecast time incremented so that valid time remains constant. |
  | 5 | Floating subinterval of time between forecast time and end of overall time interval. (see Note 1) |
  | 6-191 | Reserved |
  | 192-254 | Reserved for Local Use |
  | 255 | Missing |

  Notes:
  1.  Code figure 5 applies to instances where a single time subinterval was used to calculate the statistically processed field. The exact starting and ending times of the subinterval are not given, but it is known that itb is contained inclusively between the beginning time and the ending time of the overall interval.
 ---

 ### Table 4.12 - Operating Mode
  | Code Figure | Meaning |
  | :---------: | ------- |
  | 0 | Maintenance Mode |
  | 1 | Clear Air |
  | 2 | Precipitation |
  | 3-191 | Reserved |
  | 192-254 | Reserved for Local Use |
  | 255 | Missing |
 ---

 ###  Table 4.13 - Quality Control Indicator
  | Code Figure | Meaning |
  | :---------: | ------- |
  | 0 | No Quality Control Applied |
  | 1 | Quality Control Applied |
  | 2-191 | Reserved | 
  | 192-254 | Reserved for Local Use |
  | 255 | Missing |
 ---

 ###  Table 4.14 - Clutter Filter Indicator
  | Code Figure | Meaning |
  | :---------: | ------- |
  | 0 | No Clutter Filter Used |
  | 1 | Clutter Filter Used |
  | 2-191 | Reserved |
  | 192-254 | Reserved for Local Use |
  | 255 | Missing |
 ---

 ###  Table 4.15 - Type of Spatial Processing used to arrive at given data value from the source data
  | Code Figure | Meaning |
  | :---------: | ------- |
  | 0 | Data is calculated directly from the source grid with no interpolation (see note 1) |
  | 1 | Bilinear interpolation using the 4 source grid grid-point values surrounding the nominal grid-point |
  | 2 | Bicubic interpolation using the 4 source grid grid-point values surrounding the nominal grid-point |
  | 3 | Using the value from the source grid grid-point which is nearest to the nominal grid-point |
  | 4 | Budget interpolation using the 4 source grid grid-point values surrounding the nominal grid-point (see note 2) |
  | 5 | Spectral interpolation using the 4 source grid grid-point values surrounding the nominal grid-point |
  | 6 | Neighbor-budget interpolation using the 4 source grid grid-point values surrounding the nominal grid-point (see note 3) |
  | 7-191 | Reserved | 
  | 192-254 | Reserved for Local Use |
  | 255 | Missing |

  Notes:
  1. This method assumes that each field really represents box averages/maxima/minima where each box extends halfway to its neighboring grid point in each direction to represent averages/maxima/minima of values from the source grid with no interpolation.
  2. Budget interpolation means a low-order interpolation method that quasi-conserves are a averages. It would be appropriate for interpolating budget fields such as precipitation. This method assumes that ithe field really represents box averages/maxima/minima where each box extends halfway to its neighboring grid point in each direction. The method actually averages bilinearly interpolated values in a square array of points distributed within each output grid box.
  3. Performs a budget interpolation at the grid point nearest to the nominal grid point.
 ---

 ###  Table 4.91 - Type of Interval
  | Code Figure | Meaning |
  | :---------: | ------- |
  | 0 | Smaller than first limit |
  | 1 | Greater than second limit |
  | 2 | Between first and second limit. </br> The range includes the first limit but not the second limit. |
  | 3 | Greater than first limit |
  | 4 | Smaller than second limit |
  | 5 | Smaller or equal first limit |
  | 6 | Greater or equal second limit |
  | 7 | Between first and second limit. </br> The range includes the first limit and the second limit. |
  | 8 | Greater or equal first limit | 
  | 9 | Smaller or equal second limit |
  | 10 | Between first and second limit. </br> The range includes the second limit but not the first limit. |
  | 11 | Equal to first limit | 
  | 12-191 | Reserved |
  | 192-254 | Reserved for Local Use |
  | 255 | Missing |
 ---

 ###  Table 4.201 - Precipitation Type
  | Code Figure | Meaning |
  | :---------: | ------- |
  | 0 | Reserved |
  | 1 | Rain | 
  | 2 | Thunderstorm |
  | 3 | Freezing Rain |
  | 4 | Mixed/Ice |
  | 5 | Snow |
  | 6 | Wet Snow |
  | 7 | Mixture of Rain and Snow |
  | 8 | Ice Pellets |
  | 9 | Graupel |
  | 10 | Hail |
  | 11-191 | Reserved |
  | 192-254 | Reserved for Local Use |
  | 255 | Missing |

 ###  Table 4.202 - Precipitable Water Category
  | Code Figure | Meaning |
  | :---------: | ------- |
  | 0-191 | Reserved |
  | 192-254 | Reserved for Local Use |
  | 255 | Missing |

 ###  Table 4.203 - Cloud Type
  | Code Figure | Meaning |
  | :---------: | ------- |
  | 0 | Clear |
  | 1 | Cumulonimbus | 
  | 2 | Stratus |
  | 3 | Stratocumulus |
  | 4 | Cumulus | 
  | 5 | Altostratus |
  | 6 | Nimbostratus |
  | 7 | Altocumulus |
  | 8 | Cirrostratus |
  | 9 | Cirrorcumulus |
  | 10 | Cirrus |
  | 11 | Cumulonimbus - ground-based fog beneath the lowest layer |
  | 12 | Stratus - ground-based fog beneath the lower layer |
  | 13 | Stratocumulus - ground-based fog beneath the lowest layer |
  | 14 | Cumulus - ground-based fog beaneath the lowest layer |
  | 15 | Altostratus - ground-based fog beneath the lowest layer |
  | 16 | Nimbostratus - ground-based fog beneath the lowest layer | 
  | 17 | Altocumulus - ground-based fog beneath the lowest layer |
  | 18 | Cirrostratus - ground-based fog beneath the lowest layer |
  | 19 | Cirrorcumulus - ground-based fog beneath the lowest layer |
  | 20 | Cirrus - ground-based fog beneath the lowest layer |
  | 21-190 | Reserved |
  | 191 | Unknown |
  | 192-254 | Reserved for Local Use |
  | 255 | Missing |

  Notes:

  1.  Code figures 11-20 indicate all four layers were used and ground-based fog is below the lowest layer.

 ###  Table 4.204 - Thunderstorm Coverage
  | Code Figure | Meaning |
  | :---------: | ------- |
  | 0 | None |
  | 1 | Isolated (1-2%) |
  | 2 | Few (3-5%) |
  | 3 | Scattered (16-45%) |
  | 4 | Numerous (>45%) |
  | 5-191 | Reserved |
  | 192-254 | Reserved for Local Use |
  | 255 | Missing |

 ###  Table 4.205 - Presence of Aerosol
  | Code Figure | Meaning |
  | :---------: | ------- |
  | 0 | Aerosol not present |
  | 1 | Aerosol present |
  | 2-191 | Reserved |
  | 192-254 | Reserved for Local Use |
  | 255 | Missing |

 ###  Table 4.206 - Volcanic Ash
  | Code Figure | Meaning |
  | :---------: | ------- |
  | Code Figure | Meaning |
  | :---------: | ------- |
  | 0 | Aerosol not present |
  | 1 | Aerosol present |
  | 2-191 | Reserved |
  | 192-254 | Reserved for Local Use |
  | 255 | Missing |

 ###  Table 4.207 - Icing
  | Code Figure | Meaning |
  | :---------: | ------- |
  | 0 | None |
  | 1 | Light |
  | 2 | Moderate |
  | 3 | Severe |
  | 4 | Trace |
  | 5 | Heavy |
  | 6-191 | Reserved |
  | 192-254 | Reserved for Local Use |
  | 255 | Missing |

 ###  Table 4.208 - Turbulence
  | Code Figure | Meaning |
  | :---------: | ------- |
  | 0 | None |
  | 1 | Light |
  | 2 | Moderate |
  | 3 | Severe |
  | 4 | Trace |
  | 5 | Heavy |
  | 6-191 | Reserved |
  | 192-254 | Reserved for Local Use |
  | 255 | Missing | 

 ###  Table 4.209 - Planetary Boundary-Layer Regime
  | Code Figure | Meaning |
  | :---------: | ------- |
  | 0 | Reserved |
  | 1 | Stable |
  | 2 | Mechanically-Driven Turbulence |
  | 3 | Force Convection |
  | 4 | Free Convection |
  | 5-191 | Reserved |
  | 192-254 | Reserved for Local Use |
  | 255 | Missing |

 ###  Table 4.210 - Contrail Intensity
  | Code Figure | Meaning |
  | :---------: | ------- |
  | 0 | Contrail Not Present |
  | 1 | Contrail Present |
  | 2-191 | Reserved |
  | 192-254 | Reserved for Local Use |
  | 255 | Missing |

 ###  Table 4.211 - Contrail Engine Type
  | Code Figure | Meaning |
  | :---------: | ------- |
  | 0 | Low Bypass |
  | 1 | High Bypass |
  | 2 | Non-Bypass |
  | 3-191 | Reserved |
  | 192-254 | Reserved for Local Use |
  | 255 | Missing |

 ###  Table 4.212 - Land Use
  | Code Figure | Meaning |
  | :---------: | ------- |
  | 0 | Reserved |
  | 1 | Urban Land |
  | 2 | Agricultural |
  | 3 | Range Land |
  | 4 | Deciduous Forest |
  | 5 | Coniferous Forest | 
  | 6 | Forest/Wetland |
  | 7 | Water |
  | 8 | Wetlands |
  | 9 | Desert |
  | 10 | Tundra |
  | 11 | Ice |
  | 12 | Tropical Forest |
  | 13 | Savannah |
  | 14-191 | Reserved |
  | 192-254 | Reserved for Local Use |
  | 255 | Missing |

 ###  Table 4.213 - Soil Type
  | Code Figure | Meaning |
  | :---------: | ------- |
  | 0 | Reserved | 
  | 1 | Sand |
  | 2 | Loamy Sand |
  | 3 | Sandy Loam |
  | 4 | Silt Loam |
  | 5 | Organic |
  | 6 | Sandy Clay Loam |
  | 7 | Silt Clay Loam |
  | 8 | Clay Loam |
  | 9 | Sandy Clay |
  | 10 | Silty Clay |
  | 11 | Clay | 
  | 12-191 | Reserved |
  | 192-254 | Reserved for Local Use |
  | 255 | Missing |

 ###  Table 4.215 - Remotely Sensed Snow Coverage
  | Code Figure | Meaning |
  | :---------: | ------- |
  | 0-49 | Reserved |
  | 50 | No-Snow/No-Cloud |
  | 51-99 | Reserved |
  | 100 | Clouds |
  | 101-249 | Reserved |
  | 250 | Snow |
  | 192-254 | Reserved for Local Use |
  | 255 | Missing |

 ###  Table 4.216 - Elevation of Snow Covered Terrain
  | Code Figure | Meaning |
  | :---------: | ------- |
  | 0-90 | Elevation in increments of 100m |
  | 91-253 | Reserved | 
  | 254 | Clouds |
  | 255 | Missing |

 ###  Table 4.217 - Cloud Mask Type
  | Code Figure | Meaning |
  | :---------: | ------- |
  | 0 | Clear over water |
  | 1 | Clear over land |
  | 2 | Cloud |
  | 3 | No data |
  | 4-191 | Reserved |
  | 192-254 | Reserved for Local Use |
  | 255 | Missing |

 ###  Table 4.218 - Pixel Scene Type
  | Code Figure | Meaning |
  | :---------: | ------- |
  | 0 | No Scene Identified |
  | 1 | Green Needle-Leafed Forest |
  | 2 | Green Broad-Leafed Forest |
  | 3 | Deciduous Needle-Leafed Forest |
  | 4 | Deciduous Broad-Leafed Forest | 
  | 5 | Deciduous Mixed Forest |
  | 6 | Closed Shrub-Land |
  | 7 | Open Shrub-Land |
  | 8 | Woody Savannah |
  | 9 | Savannah |
  | 10 | Grassland |
  | 11 | Permanent Wetland |
  | 12 | Cropland |
  | 13 | Urban |
  | 14 | Vegetation/Crops |
  | 15 | Permanent Snow/Ice |
  | 16 | Barren Desert |
  | 17 | Water Bodies |
  | 18 | Tundra |
  | 19 | Warm Liquid Water Cloud |
  | 20 | Supercooled Liquid Water Cloud |
  | 21 | Mixed Phase Cloud |
  | 22 | Optically Thin Ice Cloud |
  | 23 | Optically Thick Ice Cloud |
  | 24 | Multi-Layered Cloud |
  | 25-96 | Reserved |
  | 97 | Snow/Ice on Land |
  | 98 | Snow/Ice on Water |
  | 99 | Sun-Glint |
  | 100 | General Cloud |
  | 101 | Low Cloud / Fog / Stratus |
  | 102 | Low Cloud / Stratocumulus |
  | 103 | Low Cloud / Unknown Type |
  | 104 | Medium Cloud / Nimbostratus |
  | 105 | Medium Cloud / Altostratus |
  | 106 | Medium Cloud / Unknown Type |
  | 107 | High Cloud / Cumulus |
  | 108 | High Cloud / Cirrus |
  | 109 | High Cloud / Unknown Type |
  | 110 | Unknown Cloud Type |
  | 111-191 | Reseved |
  | 192-254 | Reserved for Local Use |
  | 255 | Missing |

 ###  Table 4.219 - Cloud Top Height Quality Indicator
  | Code Figure | Meaning |
  | :---------: | ------- |
  | 0 | Nominal Cloud Top Height Quality |
  | 1 | Fog In Segment |
  | 2 | Poor Quality Height Estimation |
  | 3 | Fog In Segment and Poor Quality Height Estimation |
  | 4-191 | Reserved |
  | 192-254 | Reserved for Local Use |
  | 255 | Missing |

 ###  Table 4.220 - Horizontal Dimension Processed
  | Code Figure | Meaning |
  | :---------: | ------- |
  | 0 | Latitude |
  | 1 | Longitude |
  | 2-191 | Reserved |
  | 192-254 | Reserved for Local Use |
  | 255 | Missing |

 ###  Table 4.221 - Treatment of Missing Data 
  | Code Figure | Meaning |
  | :---------: | ------- |
  | 0 | Not included |
  | 1 | Extrapolated |
  | 2-191 | Reserved |
  | 192-254 | Reserved for Local Use |
  | 255 | Missing |

 ###  Table 4.222 - Categorical Result 
  | Code Figure | Meaning |
  | :---------: | ------- |
  | 0 | No |
  | 1 | Yes |
  | 2-191 | Reserved |
  | 192-254 | Reserved for Local Use |
  | 255 | Missing |

 ###  Table 4.223 - Fire Detection Indicator 
  | Code Figure | Meaning |
  | :---------: | ------- |
  | 0 | No Fire Detected |
  | 1 | Possible Fire Detected |
  | 2 | Probable Fire Detected |
  | 3 | Missing |
  | 4-191 | Reserved | 
  | 192-254 | Reserved for Local Use |
  | 255 | Missing |

 ###  Table 4.224 - Categorical Outlook
  | Code Figure | Meaning |
  | :---------: | ------- |
  | 0 | No Risk Area |
  | 1 | Reserved |
  | 2 | General Thunderstorm Risk Area |
  | 3 | Reserved | 
  | 4 | Slight Risk Area |
  | 5 | Reserved |
  | 6 | Moderate Risk Area |
  | 7 | Reserved |
  | 8 | High Risk Area |
  | 9-10 | Reserved |
  | 11 | Dry Thunderstorm (Dry Lightning) Risk Area |
  | 12-13 | Reserved |
  | 14 | Critical Risk Area |
  | 15-17 | Reserved |
  | 18 | Extremely Critical Risk Area |
  | 19-191 | Reserved |
  | 192-254 | Reserved for Local Use |
  | 255 | Missing |

 ###  Table 4.225 - Weather
  [[ Apparently, this was changed recently! 
     The table entry point refers to descriptors for an entirely different
     format. I'll come back to it later ;) ]]

 ###  Table 4.227 - Icing Scenario (Weather/Cloud Classification)
  | Code Figure | Meaning |
  | :---------: | ------- |
  | 0 | None |
  | 1 | General |
  | 2 | Convective |
  | 3 | Stratiform |
  | 4 | Freezing |
  | 5-191 | Reserved |
  | 192-254 | Reserved for Local Use |
  | 255 | Missing |

 ###  Table 4.230 - Atmospheric Chemical or Physical Type
  | Code Figure | Meaning | Chemical Formula |
  | :---------: | ------- | :--------------: |
  | 0 | Ozone | O3 |
  | 1 | Water Vapour | H2O |
  | 2 | Methane | CH4 |
  | 3 | Carbon Dioxide | CO2 |
  | 4 | Carbon Monoxide | CO |
  | 5 | Nitrogen Dioxide | NO2 |
  | 6 | Nitrous Oxide | N2O |
  | 7 | Formaldehyde | HCHO |
  | 8 | Sulphur Dioxide | SO2 |
  | 9 | Ammonia | NH3 |
  | 10 | Ammonium | NH4+ |
  | 11 | Nitrogen Monoxide | NO |
  | 12 | Atomic Oxygen | O |
  | 13 | Nitrate Radical | NO3 |
  | 14 | Hydroperoxyl Radical | HO2 |
  | 15 | Dinitrogen Pentoxide | H2O5 |
  | 16 | Nitrous Acid | HONO |
  | 17 | Nitric Acid | HNO3 |
  | 18 | Peroxynitric Acid | HO2NO2 |
  | 19 | Hydrogen Peroxide | H2O2 |
  | 20 | Molecular Hydrogen | H |
  | 21 | Atomic Nitrogen | N |
  | 22 | Sulphate | SO4ˆ2- |
  | 23 | Radon | Rn |
  | 24 | Elemental Mercury | Hg(O) |
  | 25 | Divalent Mercury | Hg^2+ |
  | 26 | Atomic Chlorine | Cl |
  | 27 | Chlorine Dioxide | CLO2 |
  | 28 | Dichlorine Peroxide | CL2O2 |
  | 29 | Hypochlorous Acid | HClO |
  | 30 | Chlorine Nitrate | ClONO2 |
  | 31 | Chlorine Dioxide | ClO2 |
  | 32 | Atomic Bromide | Br |
  | 33 | Bromine Monoxide | BrO |
  | 34 | Bromine Chloride | BrCl |
  | 35 | Hydrogen Bromide | HBr |
  | 36 | Hypobromous Acid | HBrO |
  | 37 | Bromine Nitrate | BrONO2 |
  | 38 | Oxygen | O2 |
  | 39-9999 | Reserved | |
  | 10000 | Hydroxyl Radial | OH |
  | 10001 | Methyl Peroxy Radical | CH3O2 |
  | 10002 | Methyl Hydroperoxide | CH3O2H |
  | 10003 | Reserved | |
  | 10004 | Methanol | CH3OH |
  | 10005 | Formic Acid | CH3OOH |
  | 10006 | Hydrogen Cyanide | HCN |
  | 10007 | Aceto Nitrile | CH3CN |
  | 10008 | Ethane | C2H6 |
  | 10009 | Ethene (Ethylene) | C2H4 |
  | 10010 | Ethyne (Acetylene) | C2H2 |
  | 10011 | Ethanol | C2H5OH |
  | 10012 | Acetic Acid | C2H5OOH |
  | 10013 | Peroxyacetyl Nitrate | CH3C(O)OONO2 |
  | 10014 | Propane (and Propane Accessories) | C3H8 |
  | 10015 | Propene | C3H6 |
  | 10016 | Butanes | C4H10 |
  | 10017 | Isoprene | C5H10 |
  | 10018 | Alpha Pinene | C10H16 |
  | 10019 | Beta Pinene | C10H16 |
  | 10020 | Limonene | C10H16 |
  | 10021 | Benzene | C6H6 |
  | 10022 | Toluene | C7H8 |
  | 10023 | Xylene | C8H10 |
  | 10024-10499 | Reserved | |
  | 10500 | Dimethyl Sulphide | CH3SCH3 | 
  | 10501-20000 | Reserved | |
  | 20001 | Hydrogen Chloride | HCL |
  | 20002 | CFC-11 | |
  | 20003 | CFC-12 | |
  | 20004 | CFC-113 | |
  | 20005 | CFC-113a | |
  | 20006 | CFC-114 | |
  | 20007 | CFC-115 | |
  | 20008 | HCFC-22 | |
  | 20009 | HCFC-141b | |
  | 20010 | HCFC-142b | |
  | 20011 | Halon-1202 | |
  | 20012 | Halon-1211 | |
  | 20013 | Halon-1301 | |
  | 20014 | Halon-2402 | |
  | 20015 | Methyl Chloride (HCC-40) | |
  | 20016 | Carbon Tetrachloride (HCC-10) | |
  | 20017 | HCC-140a CH3CCl3 | |
  | 20018 | Methyl Bromide (HBC-40B1) | |
  | 20019 | Hexachlorocyclohexane (HCH) | |
  | 20020 | Alpha Hexachlorocyclohexane | |
  | 20021 | Hexachlorobiphenyl (PCB-153) | |
  | 20022-29999 | Reserved | |
  | 30000 | Radioactive Pollutant (Tracer, defined by originating centre) | |
  | 30001-50000 | Reserved | |
  | 60000 | HOx Radical (OH+HO2) | |
  | 60001 | Total Inorganic and Organic Peroxy Radicals (HO2+RO2) | RO2 |
  | 60002 | Passive Ozone | |
  | 60003 | NOx Expressed As Nitrogen | NOx |
  | 60004 | All Nitrogen Oxides (NOy) Expressed As Nitrogen | NOy |
  | 60005 | Total Inorganic Chlorine | Clx |
  | 60006 | Total Inorganic Bromine | Brx |
  | 60007 | Total Inorganic Chlorine Except HCl, ClONO2 | ClOx |
  | 60008 | Total Inorganic Bromine Except Hbr, BrONO2 | BrOx |
  | 60009 | Lumped Alkanes | |
  | 60010 | Lumped Alkenes | |
  | 60011 | Lumped Aromatic Coumpounds | |
  | 60012 | Lumped Terpenes | |
  | 60013 | Non-Methane Volatile Organic Compounds Expressed as Carbon | NMVOC |
  | 60014 | Anthropogenic Non-Methane Volatile Organic Compounds Expressed as Carbon | aNMVOC |
  | 60015 | Biogenic Non-Methane Volatile Organic Compounds Expressed as Carbon | bNMVOC |
  | 60016 | Lumped Oxygenated Hydrocarbons | OVOC |
  | 60017-61999 | Reserved | |
  | 62000 | Total Aerosol | |
  | 62001 | Dust Dry | |
  | 62002 | water In Ambient | |
  | 62003 | Ammonium Dry | |
  | 62004 | Nitrate Dry | |
  | 62005 | Nitric Acid Trihydrate | |
  | 62006 | Sulphate Dry | |
  | 62007 | Mercury Dry | |
  | 62008 | Sea Salt Dry | |
  | 62009 | Black Carbon Dry | |
  | 62010 | Particulate Organic Matter Dry | |
  | 62011 | Primary Particulate Organic Matter Dry | |
  | 62012 | Secondary Particulate Organic Matter Dry | |
  | 62013-65534 | Reserved | |
  | 65535 | Missing | | 

  [[ In the notes, it sez: ]]
  [(See more ATMOSPHERIC CHEMICAL OR PHYSICAL CONSTITUENT TYPE in Common Code Table C-14)]
  (http://www.nco.ncep.noaa.gov/pmb/docs/grib2/WMO306_vI2_CommonTable_v17.0.0.pdf)
  (Released date: Ver. 17.0.0 - 4 May, 2016)

 ###  Table 4.233 - Aerosol Type
  [[ These were the same as Table 4.230 up to a point, copied new info ]]
  | Code Figure | Meaning |
  | :---------: | ------- |
  | 62013 | Black carbon hydrophilic dry | 
  | 62014 | Black carbon hydrophobic dry | 
  | 62015 | Particulate organic matter hydrophilic dry |
  | 62016 | Particulate organic matter hydrophobic dry |
  | 62017 | Nitrate hydrophilic dry |
  | 62018 | Nitrate hydrophobic dry |
  | 62019 | Reserved |
  | 62020 | Smoke - high absorption |
  | 62021 | Smoke - low absorption |
  | 62022 | Aerosol - high absorption |
  | 62023 | Aerosol - low absorption |
  | 62024 | Reserved |
  | 62025 | Volcanic ash |
  | 62017-65534 | Reserved |

 ###  Table 4.234 - Canopy Cover Fraction
  | Code Figure | Meaning |
  | :---------: | ------- |
  | 1 | Crops, mixed farming |
  | 2 | Short grass |
  | 3 | Evergreen needleleaf trees |
  | 4 | Deciduous needleleaf trees |
  | 5 | Deciduous broadleaf trees |
  | 6 | Evergreen broadleaf trees |
  | 7 | Tall grass |
  | 8 | Desert |
  | 9 | Tundra |
  | 10 | Irrigated corps | 
  | 11 | Semidesert |
  | 12 | Ice caps and glaciers |
  | 13 | Bogs and marshes |
  | 14 | Inland water |
  | 15 | Ocean |
  | 16 | Evergreen shrubs |
  | 17 | Deciduous shrubs |
  | 18 | Mixed forest |
  | 19 | Interrupted forest |
  | 20 | Water and land mixtures |
  | 21-191 | Reserved |
  | 192-254 | Reserved for Local Use |
  | 255 | Missing |

 ###  Table 4.235 - Wave-Generated Wave Spectral Description
  | Code Figure | Meaning |
  | :---------: | ------- |
  | 0 | Total Wave Spectrum (combined wind waves and swell) |
  | 1 | Generalized Partition |
  | 2-191 | Reserved |
  | 192-254 | Reserved for Local Use |
  | 255 | Missing |

 ###  Table 4.236 - Soil Texture Cover Fraction
  | Code Figure | Meaning |
  | :---------: | ------- |
  | 1 | Coarse |
  | 2 | Medium |
  | 3 | Medium-fine |
  | 4 | Fine | 
  | 5 | Very-fine |
  | 6 | Organic |
  | 7 | Tropical-organic |
  | 8-191 | Reserved |
  | 192-254 | Reserved for Local Use |
  | 255 | Missing |

 ###  Table 4.240 - Type of Distribution Function
  | Code Figure | Meaning |
  | :---------: | ------- |
  | 0 | No specific distribution function given |
  | 1 | Delta functions with spatially variable concentration and fixed diameters Dl(p1) in meter (See Note 1) |
  | 2 | Delta functions with spatially variable concentration and fixed masses Ml(p1) in kg (See Note 2) |
  | 3 | Gaussian (Normal) distribution with spatially variable concentration and fixed mean diameter Dl(p1) and variance δ (p2) (See Note 3) |
  | 4 | Gaussian (Normal) distribution with spatially variable concentration, mean diameter and variance (See Note 4) |
  | 5 | Log-normal distribution with spatially variable number density, mean diameter and variance (See Note 5) |
  | 6 | Log-normal distribution with spatially variable number density, mean diameter and fixed variance δ (p1) (See Note 6) |
  | 7 | Log-normal distribution with spatially variable number density and mass density and fixed variance δ and fixed particle density ρ (p2) (See Note 7) |
  | 8 | No distribution function. The encoded variable is derived from variables characterized by type of distribution function of type No. 7 (see above) with fixed variance σ (p1) and fixed particle density ρ (p2) |
  | 9-49151 | Reserved |
  | 49152-65534 | Reserved for Local Use |
  | 65535 | Missing |

  Notes: 
  /// TODO: Add the notes section which contains all the distribution functions!

 ###  Table 4.241 - Coverage Attributes
  | Code Figure | Meaning |
  | :---------: | ------- |
  | 0 | Undefined |
  | 1 | Unmodified |
  | 2 | Snow-covered |
  | 3 | Flooded |
  | 4 | Ice Covered |
  | 5-191 | Reserved |
  | 192-254 | Reserved for Local Use |
  | 255 | Missing |

 ###  Table 4.242 - Tile Classification
  | Code Figure | Meaning |
  | :---------: | ------- |
  | 0 | Reserved |
  | 1 | Land use classes according to ESA-GLOBCOVER GCV2009 |
  | 2 | Land use classes according to European Commission-Global Land Cover Project GLC2000 |
  | 3-191 | Reserved |
  | 192-254 | Reserved for Local Use |
  | 255 | Missing |

 ###  Table 4.243 - Tile Class
  | Code Figure | Meaning |
  | :---------: | ------- |
  | 0 | Reserved |
  | 1 | Evergreen broadleaved forest |
  | 2 | Deciduous broadleaved closed forest |
  | 3 | Deciduous broadleaved open forest |
  | 4 | Evergreen needle-leaf forest |
  | 5 | Deciduous needle-leaf forest |
  | 6 | Mixed leaf trees |
  | 7 | Fresh water flooded trees |
  | 8 | Saline water flooded trees |
  | 9 | Mosaic tree/natural vegetation |
  | 10 | Burnt tree cover | 
  | 11 | Evergreen shrubs closed-open |
  | 12 | Deciduous shrubs closed-open |
  | 13 | Herbaceous vegetation closed-open |
  | 14 | Sparse herbaceous or grass |
  | 15 | Flooded shrubs or herbaceous |
  | 16 | Cultivated and managed areas |
  | 17 | Mosaic crop/tree/natural vegetation |
  | 18 | Mosaic crop/shrub/grass |
  | 19 | Bare areas |
  | 20 | Water |
  | 21 | Snow and ice |
  | 22 | Artificial surface |
  | 23 | Ocean |
  | 24 | Irrigated croplands |
  | 25 | Rain fed croplands |
  | 26 | Mosaic cropland (50-70%)-vegetation (20-50%) |
  | 27 | Mosaic vegetation (50-70%)-cropland (20-50%) |
  | 28 | Closed broadleaved evergreen forest |
  | 29 | Closed needle-leaved evergreen forest |
  | 30 | Open needle-leaved deciduous forest |
  | 31 | Mixed broadleaved and needle-leaved forest | 
  | 32 | Mosaic shrubland (50-70%)-grassland (20-50%) |
  | 33 | Mosaic grassland (50-70%)-shrubland (20-50%) | 
  | 34 | Closed to open shrubland |
  | 35 | Sparse vegetation |
  | 36 | Closed to open forest regularly flooded |
  | 37 | Closed forest or shrubland permanently flooded |
  | 38 | Closed to open grassland regularly flooded |
  | 39 | Undefined |
  | 40-191 | Reserved | 
  | 192-254 | Reserved for Local Use |
  | 255 | Missing |

 ###  Table 4.244 - Quality Indicator
  | Code Figure | Meaning |
  | :---------: | ------- |
  | 0 | Quality Information Not Given |
  | 1 | Failed |
  | 2 | Passed |
  | 3-191 | Reserved |
  | 192-254 | Reserved for Local Use |
  | 255 | Missing |

  Notes:
  * VALIDATION means the corresponding entry is not yet official and could 
  change at any time, so it should not be used for any official products. 


[5] Data Representation Section 
====== 
 | Octet Number | Content |
 | :----------: | ------- |
 | 1-4 | Length of the section in octets (nn) |
 | 5 | Number of the section (5) |
 | 6-9 | Number of data points where one or more values are specified in Section 7 when a bit map is present, total number of data points when a bit map is absent. |
 | 10-11 | Data representation template number (See Table 5.0) |
 | 12-nn | Data representation template (See Template 5.X, where X is the number given in octets 10-11) |
 ___

 ###  Table 5.0 - Data Representation Template Number 
  | Code Figure | Meaning |
  | :---------: | ------- |
  | 0 | Grid Point Data - Simple Packing (see Template 5.0) |
  | 1 | Matrix Value at Grid Point - Simple Packing (see Template 5.1) |
  | 2 | Grid Point Data - Complex Packing (see Template 5.2) |
  | 3 | Grid Point Data - Complex Packing and Spatial Differencing (see Template 5.3) |
  | 4 | Grid Point Data - IEEE Floating Point Data (see Template 5.4) |
  | 5-39 | Reserved |
  | 40 | Grid Point Data - JPEG2000 Compression (see Template 5.40) |
  | 41 | Grid Point Data - PNG Compression (see Template 5.41) |
  | 42-49 | Reserved |
  | 50 | Spectral Data - Simple Packing (see Template 5.50) |
  | 51 | Spectral Data - Complex Packing (see Template 5.51) |
  | 52-60 | Reserved |
  | 61 | Grid Point Data - Simple Packing With Logarithm Pre-processing (see Template 5.61) |
  | 62-199 | Reserved |
  | 200 | Run Length Packing With Level Values (see Template 5.200) |
  | 201-49151 | Reserved |
  | 49152-65534 | Reserved for Local Use |
  | 65536 | Missing |
 ---

 ### Table 5.1 - Type of Original Field Values
  | Code Figure | Meaning |
  | :---------: | ------- |
  | 0 | Floating Point |
  | 1 | Integer |
  | 2-191 | Reserved | 
  | 192-254 | Reserved for Local Use |
  | 255 | Missing |
 ---

 ### Table 5.2 - Matrix Coordinate Value Function Definition 
  | Code Figure | Meaning |
  | :---------: | ------- |
  | 0 | Explicit Coordinate Values Set | 
  | 1 | Linear Coordinates </br>  f(1) = C1 </br>  f(n) = C2 x f(n-1)
  | 2-10 | Reserved |
  | 11 | Geometric Coordinates </br>  f(1) = C1 </br>  f(n) = C2 x f(n-1)
  | 12-191 | Reserved |
  | 192-254 | Reserved for Local Use |
  | 255 | Missing |
 ---

 ### Table 5.3 - Matrix Coordinate Parameter
  | Code Figure | Meaning |
  | :---------: | ------- |
  | 0 | Reserved |
  | 1 | Direction Degrees True |
  | 2 | Frequency (s^-1) |
  | 3 | Radial Number (2pi/lambda) (m^-1) |
  | 4-191 | Reserved |
  | 192-254 | Reserved for Local Use |
  | 255 | Missing |
 ---

 ### Table 5.4 - Group Splitting Method
  | Code Figure | Meaning |
  | :---------: | ------- |
  | 0 | Row by Row Splitting |
  | 1 | General Group Splitting |
  | 2-191 | Reserved |
  | 192-254 | Reserved for Local Use |
  | 255 | Missing |
 ---

 ### Table 5.5 - Missing Value Management for Complex Packing
  | Code Figure | Meaning |
  | :---------: | ------- |
  | 0 | No explicit missing values included within the data values |
  | 1 | Primary missing values included within the data values |
  | 2 | Primary and secondary missing values included within the data values |
  | 3-191 | Reserved |
  | 192-254 | Reserved for Local Use |
  | 255 | Missing |
 ---

 ### Table 5.6 - Order of Spatial Differencing
  | Code Figure | Meaning |
  | :---------: | ------- |
  | 0 | Reserved |
  | 1 | First-Order Spatial Differencing |
  | 2 | Second-Order Spatial Differencing |
  | 3-191 | Reserved |
  | 192-254 | Reserved for Local Use |
  | 255 | Missing |
 ---

 ### Table 5.7 - Precision of Floating Point Numbers 
  | Code Figure | Meaning |
  | :---------: | ------- |
  | 0 | Reserved |
  | 1 | IEEE 32-bit (I=4 in Section 7) |
  | 2 | IEEE 64-bit (I=8 in Section 7) |
  | 3 | IEEE 128-bit (I=16 in Section 7) |
  | 4-254 | Reserved |
  | 255 | Missing |
 ---

 ### Table 5.40 - Type of Compression
  | Code Figure | Meaning |
  | :---------: | ------- |
  | 0 | Lossless |
  | 1 | Lossy |
  | 2-254 | Reserved |
  | 255 | Missing |
 ---


[6] Bit Map Section 
====== 
 | Octet Number | Content |
 | :----------: | ------- |
 | 1-4 | Length of the section in octets (nn) |
 | 5 | Number of the section |
 | 6 | Bit-map indicator (See Table 6.0) (See note 1 below) |
 | 7-nn | Bit-map |

 Notes:
 1. If octet 6 is not zero, the length of this section is 6 and octets 7-nn are not present.
 ___

 ### Table 6.0 - Bit Map Indicator
  | Code Figure | Meaning |
  | :---------: | ------- |
  | 0 | A bit map applies to this product and is specified in this section. |
  | 1-253 | A bit map pre-determined by the originating/generating center applies to this product and is not specified in this section. |
  | 254 | A bit map previously defined in the same GRIB2 message applies to this product. |
  | 255 | A bit map does not apply to this product. | 
 ---


[7] Data Section 
====== 
 | Octet Number | Content |
 | :----------: | ------- |
 | 1-4 | Length of the section in octets (nn) |
 | 5 | Number of the section (7) |
 | 6-nn | Data in a format described by data Template 7.X, where X is the data representation template number given in octets 10-11 of Section 5. |
 ___

 ### Table 7.0 - Data Template Number
  | Code Figure | Meaning |
  | :---------: | ------- |
  | 0 | Grid Point Data - Simple Packing (see Template 7.0) |
  | 1 | Matrix Value at Grid Point - Simple Packing (see Template 7.1) |
  | 2 | Grid Point Data - Complex Packing (see Template 7.2) | 
  | 3 | Grid Point Data - Complex Packing and Spatial Differencing (see Template 7.3) |
  | 4 | Grid Point Data - IEEE Floating Point Data (see Template 7.4) |
  | 5-39 | Reserved |
  | 40 | Grid Point Data - JPEG2000 Compression (see Template 7.40) |
  | 41 | Grid Point Data - Portable Network Graphics (PNG) format (see Template 7.41) |
  | 42-49 | Reserved |
  | 50 | Spectral Data - Simple Packing (see Template 7.50) |
  | 51 | Spectral Data - Complex Packing (see Template 7.51) |
  | 52-49151 | Reserved |
  | 49152-65534 | Reserved for Local Use |
  | 65535 | Missing |
 ---


///TODO: go and work out all the jazz with Appendices A, B, and C.
///   In fact, I should definitely browse around App.C - Definition of Commonly used NCEP Grids 
