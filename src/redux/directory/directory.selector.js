
import {createSelector} from 'reselect';

const selectdirectory = (state) => state.directory;

export const selectSections = createSelector(
    [selectdirectory],
    directory => directory.sections
)