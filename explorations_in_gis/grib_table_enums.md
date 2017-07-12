grib_table_enums.md
=====
I wanted to keep track of the different enumeration codes for table entries in
the GRIB format.
-----

For reference, I have tried to copy and compile the values from [an unofficial NCEP document](http://www.nco.ncep.noaa.gov/pmb/docs/grib2/grib2_doc.shtml#disclaimer), just to have them all in one place. However, there are numerous other acronyms and definitions I've found elsewhere; I'll try to edit this to include those as I find need of them. I've also skipped over some of the enum codes for the sake of time.

### TABLE 0.0 - Discipline of Processed Data
  | Code Figure | Meaning |
  | ----------- | :-----: |
  | 0       | Meterological Products |
  | 1       | Hydrological Products |
  | 2       | Land Surface Products |
  | 3-4     | Space Products |
  | 5-9     | Reserved |
  | 10      | Oceanographic Products |
  | 11-191  | Reserved |
  | 192-254 | Reserved for Local Use |
  | 255     | Missing |

___
## Indicator Section
___
### Table 1.0 - GRIB Master Tables Version Number
  | Code Figure | Meaning |
  | ----------- | :-----: |
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
  | ----------- | :-----: |
  | 0 | Local tables not used.  Only table entries and templates from the
  current master table are valid. |
  | 1-254 | Number of local table version used. |
  | 255 | Missing |
---

### TABLE 1.2 - Significance of Reference Time
  | Code Figure | Meaning |
  | ----------- | :-----: |
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
  | ----------- | :-----: |
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
  | ----------- | :-----: |
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
  | ----------- | :-----: |
  | 0 | Calendar Definition |
  | 1 | Paleontological Offset |
  | 2 | Calendar Definition and Paleontological Offset |
  | 3-32767 | Reserved |
  | 32768-65534 | Reserved for Local Use |
  | 65535 | Missing |
---

### Table 1.6 - Type of Calendar
  | Code Figure | Meaning |
  | ----------- | :-----: |
  | 0 | Gregorian |
  | 1 | 360-day |
  | 2 | 365-day (see Note 1) |
  | 3 | Proleptic Gregorian (see Note 2) |
  | 4-191 | Reserved |
  | 192-254 | Reserved for Local Use |
  | 255 | Missing |

  1. Essentially a non-leap year
  2. Extends the Gregorian calendar indefinitely in the past

___
## Grid Definition Section
___
### Table 3.0 - Source of Grid Definition
  | Code Figure | Meaning |
  | ----------- | :-----: |
  | 0 | Specified in Code Table 3.1 | 
  | 1 | Presdetermined Grid Definition - Defined by Originating Center | 
  | 2-191 | Reserved | 
  | 102-254 | Reserved for Local Use | 
  | 255 | A grid definition does not apply to this product |
---

### Table 3.1 - Grid Definition Template Number
  | Code Figure | Meaning |
  | ----------- | :-----: |
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
  | ----------- | :-----: |
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
  | ----------- | :-----: |
---

###  Table 3.4 - Scanning Mode
  | Code Figure | Meaning |
  | ----------- | :-----: |
---

###  Table 3.5 - Projection Center
  | Code Figure | Meaning |
  | ----------- | :-----: |
---

###  Table 3.6 - Spectral Data Representation Type
  | Code Figure | Meaning |
  | ----------- | :-----: |
---

###  Table 3.7 - Spectral Data Representation Mode
  | Code Figure | Meaning |
  | ----------- | :-----: |
---

###  Table 3.8 - Grid Point Position
  | Code Figure | Meaning |
  | ----------- | :-----: |
---

###  Table 3.9 - Numbering Order of Diamonds
  | Code Figure | Meaning |
  | ----------- | :-----: |
---

###  Table 3.10 - Scanning Mode for One Diamond
  | Code Figure | Meaning |
  | ----------- | :-----: |
---

###  Table 3.11 - Interpretation of List of Numbers at end of section 3
  | Code Figure | Meaning |
  | ----------- | :-----: |
---

###  Table 3.15 - Physical Meaning of Vertical Coordinate
  | Code Figure | Meaning |
  | ----------- | :-----: |
---

###  Table 3.20 - Type of Horizontal Line
  | Code Figure | Meaning |
  | ----------- | :-----: |
---

###  Table 3.21 - Vertical Dimension Coordinate Values Definition
  | Code Figure | Meaning |
  | ----------- | :-----: |
---

___
## Product Definition Section
___
### Table 4.0 - Product Definition Template Number
  | Code Figure | Meaning |
  | ----------- | :-----: |
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
  | ----------- | :---------: |
  | 0 | Temperature | 
  | 1 | Moisture | 
  | 2 | Momentum | 
  | 3 | Mass | 
  | 4 | Short-wave radiation | 
  | 5 | Long-wave radiation | 
  | 6 | Cloud |
  | 7 | Themodynamic Stability indicies | 
  | 8 | Kinematic Stability indicies |
  | 9 | Temperature Probabilities* | 
  | 10 | Moisture Probabilities* |
  | 11 | Momentum Probabilities* |
  | 12 | Mass Probabilities* |
  | 13 | Aerosols |
  | 14 | Trace gases (e.g. Ozone, CO_2) |
  | 15 | Radar |
  | 16 | Forecast Radar Imagery |
  | 17 | Electrodynamics |
  | 18 | Nuclear/radiology|
  | 19 | Physical atmospheric properties |
  | 20 | Atmospheric Chemical Constituents |
  | 21-189 | Reserved |
  | 190 | CCITT IA5 string |
  | 191 | Miscellaneous |
  | 192 | Covariance |
  | 192-254 | Reserved for Local Use |
  | 255 | Missing |

  Notes:
  * Entries 9, 10, 11 and 12 are deprecated.

#### Product Discipline 1 - Hydrological Products
  | Category    | Description |
  | ----------- | :---------: |
  | 0 | Hydrology basic products |
  | 1 | Hydrology probabilities |
  | 2 | Inland water and sediment properties |
  | 3-191 | Reserved |
  | 192-254 | Reserved for Local Use |
  | 255 | Missing |
---

#### Product Discipline 2 - Land Surface Products
  | Category    | Description |
  | ----------- | :---------: |
  | 0 | Vegetation/Biomass |
  | 1 | Agricultural Aquacultural Special Products |
  | 2 | Transportation-related Products |
  | 3 | Soil Products |
  | 4 | Fire Weather Products |
  | 5 | Land Surface Products |
  | 6-191 | Reserved |
  | 192-254 | Reserved for Local Use |
  | 255 | Missing |
---

#### Product Discipline 3 - Space Products
  | Category    | Description |
  | ----------- | :---------: |
  | 0 | Image Format Products (See note 1) | 
  | 1 | Quantitative products (See note 2) |
  | 2 | Cloud Properties |
  | 3 | Flight Rules Conditions |
  | 4 | Volcanic Ash |
  | 5 | Sea-surface Temperature |
  | 6 | Solar Radiation |
  | 7-191 | Reserved
  | 192 | Forecast Satellite Imagery (See note 2) |
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
---

#### Product Discipline 4 - Space Weather Products (Validation)
  | Category    | Description |
  | ----------- | :---------: |
  | 0 | Temperature |
  | 1 | Momentum |
  | 2 | Charged Particle Mass and Number |
  | 3 | Electric and Magnetic Fields |
  | 4 | Energetic Particles |
  | 5 | Waves |
  | 6 | Solar Electromagnetic Emissions |
  | 7 | Terrestrial Electromagnetic Emissions |
  | 8 | Imagery |
  | 9 | Ion-Netral Coupling |
  | 10-191 | Reserved |
  | 192-254 | Reserved for Local Use |
  | 255 | Missing |
---



#### Product Discipline 10 - Oceanographic Products
  | Category    | Description |
  | ----------- | :---------: |
  | 0 | Waves |
  | 1 | Currents |
  | 2 | Ice |
  | 3 | Surface Properties |
  | 4 | Sub-surface Properties |
  | 5-190 | Reserved |
  | 191 | Miscellaneous |
  | 192-254 | Reserved for Local Use |
  | 255 | Missing |
---

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
  | ----------- | :-----: |
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
  | ----------- | :-----: |
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
  | ----------- | :-----: | :---- |
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
  | ----------- | :-----: |
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
  | ----------- | :-----: |
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
  | ----------- | :-----: |
  | 0 | Anomaly Correlation |
  | 1 | Root Mean Square |
  | 2-191 | Reserved |
  | 192-254 | Reserved for Local Use |
  | 255 | Missing |
---

### Table 4.9 - Probability Type
  | Code Figure | Meaning |
  | ----------- | :-----: |
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
  | ----------- | :-----: |
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
  | 192 | Climatological Mean Value: multiple year averages of quantities which are themselves means over some period of time (P2) less than a year. The reference time (R) indicates the date and time of the start of a period of time, given by R to R + P2, over which a mean is formed; N indicates the number of such period-means that are averaged together to form the climatological value, assuming that the N period-mean fields are separated by one year. The reference time indicates the start of the N-year climatology. N is given in octets 22-23 of the PDS. </br> If P1 = 0 then the data averaged in the basic interval P2 are assumed to be continuous, i.e., all available data are simply averaged together. </br> If P1 = 1 (the units of time - octet 18, code table 4 - are not relevant here) then the data averaged together in the basic interval P2 are valid only at the time (hour, minute) given in the reference time, for all the days included in the P2 period. The units of P2 are given by the contents of octet 18 and Table 4. |
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
  | ----------- | :-----: |
---

### Table 4.12 - Operating Mode
  | Code Figure | Meaning |
  | ----------- | :-----: |
---

###  Table 4.13 - Quality Control Indicator
  | Code Figure | Meaning |
  | ----------- | :-----: |
---

###  Table 4.14 - Clutter Filter Indicator
  | Code Figure | Meaning |
  | ----------- | :-----: |
---

###  Table 4.15 - Type of Spatial Processing used to arrive at given data value from the source data
  | Code Figure | Meaning |
  | ----------- | :-----: |
---

###  Table 4.91 - Type of Interval
  | Code Figure | Meaning |
  | ----------- | :-----: |
---

###  Table 4.201 - Precipitation Type
  | Code Figure | Meaning |
  | ----------- | :-----: |
---

###  Table 4.202 - Precipitable Water Category
  | Code Figure | Meaning |
  | ----------- | :-----: |
---

###  Table 4.203 - Cloud Type
###  Table 4.204 - Thunderstorm Coverage
###  Table 4.205 - Presence of Aerosol
###  Table 4.206 - Volcanic Ash
###  Table 4.207 - Icing
###  Table 4.208 - Turbulence
###  Table 4.209 - Planetary Boundary-Layer Regime
###  Table 4.210 - Contrail Intensity
###  Table 4.211 - Contrail Engine Type
###  Table 4.212 - Land Use
###  Table 4.213 - Soil Type
###  Table 4.215 - Remotely Sensed Snow Coverage
###  Table 4.216 - Elevation of Snow Covered Terrain
###  Table 4.217 - Cloud Mask Type
###  Table 4.218 - Pixel Scene Type
###  Table 4.219 - Cloud Top Height Quality Indicator
###  Table 4.220 - Horizontal Dimension Processed
###  Table 4.221 - Treatment of Missing Data 
###  Table 4.222 - Categorical Result 
###  Table 4.223 - Fire Detection Indicator 
###  Table 4.224 - Categorical Outlook
###  Table 4.225 - Weather
###  Table 4.227 - Icing Scenario (Weather/Cloud Classification)
###  Table 4.230 - Atmospheric Chemical or Physical Type
###  Table 4.233 - Aerosol Type
###  Table 4.234 - Canopy Cover Fraction
###  Table 4.235 - Wave-Generated Wave Spectral Description
###  Table 4.236 - Soil Texture Cover Fraction
###  Table 4.240 - Type of Distribution Function
###  Table 4.241 - Coverage Attributes
###  Table 4.242 - Tile Classification
###  Table 4.243 - Tile Class
###  Table 4.244 - Quality Indicator

___
## Data Representation Section
___
###  Table 5.0 - Data Representation Template Number 
###  Table 5.1 - Type of Original Field Values
###  Table 5.2 - Matrix Coordinate Value Function Definition 
###  Table 5.3 - Matrix Coordinate Parameter
###  Table 5.4 - Group Splitting Method
###  Table 5.5 - Missing Value Management for Complex Packing
###  Table 5.6 - Order of Spatial Differencing
###  Table 5.7 - Precision of Floating Point Numbers 
###  Table 5.40 - Type of Compression

___
## Bit Map Section
___
### Table 6.0 - Bit Map Indicator

___
## Data Section
___
### Table 7.0 - Data Template Number

## 

