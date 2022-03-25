import moment from 'moment';

export const release_date = releaseDate =>
  moment(releaseDate).format('DD MMMM YYYY');
export const release_year = releaseDate => moment(releaseDate).format('YYYY');
