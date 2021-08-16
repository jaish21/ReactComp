import React from 'react';
import _ from 'lodash';
import Fuse from 'fuse.js';

const getFuseSearchResults = ({ list, options, searchTerm }) => {
    const fuse = new Fuse(list, options);
    const results = fuse.search(searchTerm)

    return results.map(item => item.item)
}

export const ApplySearchFilters = (list, options) => {
    const [searchResults, setSearchResults] = React.useState(list);

    const applySearch = React.useCallback(
        _.debounce(searchConfig => {
            const searchTerm = searchConfig.target.value;
            if (_.isEmpty(searchTerm)) {
                setSearchResults(list);
                return;
            }
            const results = getFuseSearchResults({ list, options, searchTerm });
            setSearchResults(results);
        }, 100),
        [list]
    );
    return [searchResults, applySearch];
};
