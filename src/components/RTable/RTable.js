import React from 'react';
import _ from 'lodash';
import * as Styles from './RTable.styles'
import { ApplySearchFilters } from './RTable.helpers'

const RTable = (props) => {
   const { columnsConfig, data } = props;

   const columnsByData = _.keyBy(columnsConfig, 'data')

   const rowData = React.useMemo(() => data,
      []
   )

   const getColumns = (columnsConfiguration) => {
      return columnsConfiguration.map(column => column.data)
   }

   const columnHeaders = React.useMemo(() => getColumns(columnsConfig),
      [columnsConfig]
   )

   const getSearchableColumns = () => {
      let options = []
      columnsConfig.map(column => {
         if (column.isSearchable) {
            options.push(column.data)
         }
      })

      return options;
   }

   const [searchResults, applySearch] = ApplySearchFilters(rowData, {
      keys: getSearchableColumns()
   })

   return (
      <Styles.Container>
         <Styles.Search>
            <Styles.Label>Search</Styles.Label>
            <Styles.Input type="text" name="search" onChange={applySearch} />

         </Styles.Search>

         <Styles.Table>
            <thead>
               <Styles.HeaderRow>
                  {columnsConfig.map(column => (
                     <Styles.Header width={column.width}>{column.header}</Styles.Header>
                  ))}
               </Styles.HeaderRow>
            </thead>
            <tbody >
               {searchResults.map(row => {
                  return (
                     <Styles.Row>
                        {columnHeaders.map(cell => {
                           const currentColumnConfig = columnsByData[cell]
                           return <Styles.Cell width={currentColumnConfig.width}>{row[cell] || ''}</Styles.Cell>
                        })}
                     </Styles.Row>
                  )
               })}
            </tbody>
         </Styles.Table>
      </Styles.Container>)
}

export default RTable;