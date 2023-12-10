import { ProductType } from '@models/product';
import Fuse from 'fuse.js';

const fuseOptions = {
    // isCaseSensitive: false,
    // includeScore: false,
    // shouldSort: true,
    // includeMatches: false,
    // findAllMatches: false,
    // minMatchCharLength: 1,
    // location: 0,
    // threshold: 0.6,
    // distance: 100,
    // useExtendedSearch: false,
    // ignoreLocation: false,
    // ignoreFieldNorm: false,
    // fieldNormWeight: 1,
    keys: [
        "name",
        "description",
    ]
};



// Change the pattern



export function Fusesearch(products: ProductType[], searchPattern: string) {
    const fuse = new Fuse(products, fuseOptions);
    return fuse.search(searchPattern)
}