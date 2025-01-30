// This module imports images for different planet types and creates an object
// 'planetTypeToImages' that maps each planet type to its corresponding image.
// This makes it easy to access the images based on planet type.

import planetTypeArchipelago from "@/public/image-assets/icon-planet-type-archipelago.png";
import planetTypeDelta from "@/public/image-assets/icon-planet-type-delta.png";
import planetTypeDunes from "@/public/image-assets/icon-planet-type-dunes.png";
import planetTypeForesty from "@/public/image-assets/icon-planet-type-foresty.png";
import planetTypeGigas from "@/public/image-assets/icon-planet-type-gigas.png";
import planetTypeInferno from "@/public/image-assets/icon-planet-type-inferno.png";
import planetTypeKarsts from "@/public/image-assets/icon-planet-type-karsts.png";
import planetTypeLeviathan from "@/public/image-assets/icon-planet-type-leviathan.png";
import planetTypeMountainous from "@/public/image-assets/icon-planet-type-mountainous.png";
import planetTypeNormal from "@/public/image-assets/icon-planet-type-normal.png";
import planetTypeOasis from "@/public/image-assets/icon-planet-type-oasis.png";
import planetTypeTempest from "@/public/image-assets/icon-planet-type-tempest.png";
import planetTypeTundra from "@/public/image-assets/icon-planet-type-tundra.png";
import planetTypeVolcanic from "@/public/image-assets/icon-planet-type-volcanic.png";
import planetTypeWasteland from "@/public/image-assets/icon-planet-type-wasteland.png";

const planetTypeToImages = {
  Archipelago: planetTypeArchipelago,
  Delta: planetTypeDelta,
  Dunes: planetTypeDunes,
  Foresty: planetTypeForesty,
  Gigas: planetTypeGigas,
  Inferno: planetTypeInferno,
  Karsts: planetTypeKarsts,
  Leviathan: planetTypeLeviathan,
  Mountainous: planetTypeMountainous,
  Normal: planetTypeNormal,
  Oasis: planetTypeOasis,
  Tempest: planetTypeTempest,
  Tundra: planetTypeTundra,
  Volcanic: planetTypeVolcanic,
  Wasteland: planetTypeWasteland,
};

export default planetTypeToImages;
