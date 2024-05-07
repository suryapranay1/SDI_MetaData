import React, { useEffect, useRef, useState } from 'react';
import {
  Accordion,
  AccordionDetails,
  AccordionGroup,
  AccordionSummary,
  Stack,
  styled,
  Typography,
} from '@mui/joy';
import 'ol/ol.css';
import { Outlet, useParams } from 'react-router-dom';
// import { useNavigate } from 'react-router-dom';

const AccordionItem = styled(Typography)({
  padding: 6,
  cursor: 'pointer',
  '&:hover': {
    backgroundColor: '#fff',
  },
});
const generalItems = {
  energy: 'Energy and Environment',
  health: 'Society and Health',
  agriculture: 'Agriculture and Forestry',
  space: 'Space and Location',
  transport: 'Transport and Technology',
  economy: 'Economy and Finances',
};
const historicalItems = {
  historical: 'Geo Hazards',
};
const weatherItems = {
  weather: 'Climate and Weather',
};

const providerItems = {
  federation: 'Federation',
  states: 'States and Local Authorrities',
  econamy: 'Economy',
  science: 'Science',
};
const applicationsItems = {
  special: 'Specialised Applications',
  geoportal: 'Geoportals of the Federal States',
};

const AccordionItemComponent = ({
  sidebarOpen,
  setSidebarOpen,
}: {
  sidebarOpen: boolean;
  setSidebarOpen: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
//   const navigate = useNavigate();
//   const [selectedAccordionItem, setSelectedAccordionItem] = useState('');

//   const toggleGeneralMaps = (key: string) => {
//     navigate(key);
//     setSidebarOpen(false);
//     setSelectedAccordionItem(key);
//   };
//   const toggleHistoryMaps = (key: string) => {
//     navigate(key);
//     setSidebarOpen(false);
//     setSelectedAccordionItem(key);
//   };
//   const toggleWeatherMaps = (key: string) => {
//     navigate(key);
//     setSidebarOpen(false);
//     setSelectedAccordionItem(key);
//   };
//   const toggleApplicationMaps = (key: string) => {
//     navigate(key);
//     setSidebarOpen(false);
//     setSelectedAccordionItem(key);
//   };
//   const toggleProviderMaps = (key: string) => {
//     navigate(key);
//     setSidebarOpen(false);
//     setSelectedAccordionItem(key);
//   };

  return (
    <>
      {sidebarOpen && (
        <Stack
          sx={{
            backgroundColor: '#f5f5f5',

            width: 400,
            position: 'absolute',
            top: 0,
            left: 0,
            zIndex: 1050,
            overflow: 'auto',
            minHeight: '100%',
          }}
        >
          <AccordionGroup sx={{ maxWidth: 400 }}>
            <Accordion>
              <AccordionSummary>General Maps</AccordionSummary>
              <AccordionDetails>
                <Stack gap={1}>
                  {Object.entries(generalItems).map(([key, value]) => (
                    <AccordionItem
                      key={key}
                      onClick={() => {
                        // toggleGeneralMaps(key);
                      }}
                    >
                      {value}
                    </AccordionItem>
                  ))}
                </Stack>
              </AccordionDetails>
            </Accordion>
            <Accordion>
              <AccordionSummary>Historical Incidents</AccordionSummary>
              <AccordionDetails>
                <Stack gap={1}>
                  {Object.entries(historicalItems).map(([key, value]) => (
                    <AccordionItem
                      key={key}
                      onClick={() => {
                        // toggleHistoryMaps(key);
                      }}
                    >
                      {value}
                    </AccordionItem>
                  ))}
                </Stack>
              </AccordionDetails>
            </Accordion>
            <Accordion>
              <AccordionSummary>Weather Maps</AccordionSummary>
              <AccordionDetails>
                <Stack gap={1}>
                  {Object.entries(weatherItems).map(([key, value]) => (
                    <AccordionItem
                      key={key}
                      onClick={() => {
                        // toggleWeatherMaps(key);
                      }}
                    >
                      {value}
                    </AccordionItem>
                  ))}
                </Stack>
              </AccordionDetails>
            </Accordion>

            <Accordion>
              <AccordionSummary>Applications</AccordionSummary>
              <AccordionDetails>
                <Stack gap={1}>
                  {Object.entries(applicationsItems).map(([key, value]) => (
                    <AccordionItem
                      key={key}
                      onClick={() => {
                        // toggleApplicationMaps(key);
                      }}
                    >
                      {value}
                    </AccordionItem>
                  ))}
                </Stack>
              </AccordionDetails>
            </Accordion>
            <Accordion>
              <AccordionSummary>Data Providers</AccordionSummary>
              <AccordionDetails>
                <Stack gap={1}>
                  {Object.entries(providerItems).map(([key, value]) => (
                    <AccordionItem
                      key={key}
                      onClick={() => {
                        // toggleProviderMaps(key);
                      }}
                    >
                      {value}
                    </AccordionItem>
                  ))}
                </Stack>
              </AccordionDetails>
            </Accordion>
          </AccordionGroup>
        </Stack>
      )}
      {/* <Outlet /> */}
    </>
  );
};

export default AccordionItemComponent;