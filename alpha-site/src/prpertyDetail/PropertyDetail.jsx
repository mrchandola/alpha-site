import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom"; 
import { apiRequest } from "../utils/ApiService"; 

// import ImageCarousel from "./ImageCarousel"
import PropertySlider from "./ImageCarousel"
import Layout from "../layouts/Layout";
import BookingForm from "./BookingForm"
import LocationMap from "./LocationMap"
import SimilerListing from "./SimilerListing"
import BuildingAmenities from "./BuildingAmenities"
import RoomType from "./RoomType"
import FaqListing from "./FaqListing"
import "./PropertyDetail";
import PropertyDescriptionModal from "./PropertyDescriptionModal";
import PropertyOfferModal from "./PropertyOfferModal";
import "bootstrap/dist/css/bootstrap.min.css";

const PropertyDetail = () => {

  // const [show, setShow] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [showOfferModal, setShowOfferModal] = useState(false);


  const { propertyId } = useParams(); // Get the dynamic ID from the URL
  
  // const BookingForm = () => {
    const [formData, setFormData] = useState({
      name: "",
      email: "",
      persons: 1,
      date: "",
      time: "12:00 am",
      additionalInfo: "",
    });

    // Handle input change
    const handleChange = (e) => {
      setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    // Handle quantity change (min: 1, max: 3)
    const handleQuantityChange = (type) => {
      setFormData((prev) => ({
        ...prev,
        persons: type === "increase" ? Math.min(prev.persons + 1, 3) : Math.max(prev.persons - 1, 1),
      }));
    };

    // Handle form submission
    const handleSubmit = (e) => {
      e.preventDefault();
      console.log("Form Data Submitted:", formData);
    };

    
  const [propertiesDetails, setPropertiesDetails] = useState([]);
  const [amenities, setAmenities] = useState([]);
  const [universities, setUniversities] = useState(""); // ✅ Initialize as an empty string
  const [faqs, setFaq] = useState(""); // ✅ Initialize as an empty string
  const [rooms, setRooms] = useState(""); // ✅ Initialize as an empty string
  const [medias, setMedias] = useState(""); // ✅ Initialize as an empty string

    useEffect(() => {
      const fetchData = async () => {
        try {
          setPropertiesDetails([]); // ✅ Clear old data before fetching new data
          setAmenities([]); // ✅ Clear old data before fetching new data
          setUniversities([]); // ✅ Clear old data before fetching new data
          setUniversities([]); // ✅ Clear old data before fetching new data
          setRooms([]); // ✅ Clear old data before fetching new data
          setMedias([]); // ✅ Clear old data before fetching new data
          let propertyDetailsUrl = `/properties/${propertyId}`;
          const propertyData = await apiRequest(propertyDetailsUrl);
  
          if (propertyData) {
            setPropertiesDetails(propertyData);

            // ✅ Set country name from first city's country object
            if (propertyData.amenities.length > 0) {
              setAmenities(propertyData.amenities);
            }
            
            if (propertyData.universities.length > 0) {
              setUniversities(propertyData.universities);
            }

            if (propertyData.faqs.length > 0) {
              setFaq(propertyData.faqs);
            }

            if (propertyData.rooms.length > 0) {
              setRooms(propertyData.rooms);
            }

            if (propertyData.medias.length > 0) {
              setMedias(propertyData.medias);
            }
          } else {
            setAmenities(""); // Reset Amenities  if no cities are found
            setFaq(""); // Reset faq if no cities are found
            setUniversities(""); // Reset universities if no cities are found
            setRooms(""); // Reset rooms if no cities are found
            setMedias(""); // Reset media if no cities are found
          }
        } catch (error) {
          console.error("Error fetching data:", error);
        }
      };
  
      fetchData();
    }, [propertyId]); // ✅ Re-run effect when countryId changes
  
    // console.log("PropertiesDetails",propertiesDetails);

    
  return (
    
    <Layout>
      {medias.length > 0 && <PropertySlider medias={medias} propertyName={propertiesDetails.name} />}
      <section className="gray-section no-top-padding">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="list-single-main-wrapper fl-wrap" id="sec2">
                <div className="breadcrumbs"><a href="/home">Home</a><a href="/">{propertiesDetails.city?.country?.name}</a>
                <a href="#">{propertiesDetails.city?.name}</a>
                <span className="text-white">{propertiesDetails.name}</span>
                <br></br></div>
              </div>
            </div>

            <div className="col-md-8">
              <div className="list-single-main-wrapper fl-wrap " id="sec2">
                  <div className="list-single-header list-single-header-inside fl-wrap">
                      <div className="container">
                          <div className="list-single-header-item">
                              <div className="row">
                                  <div className="col-md-8">
                                      <h1 className="text-danger">{propertiesDetails.name} </h1>
                                  </div>
                                  <p className="text-dark">{propertiesDetails.shortDescription} &nbsp;&nbsp;


                                  {propertiesDetails.description && (
                                    <>
                                      {propertiesDetails.description}
                                      <a href="#" onClick={() => setShowModal(true)} className="text-black"> more</a>
                                    </>
                                  )}

                                    {showModal && (
                                      <PropertyDescriptionModal 
                                        description="This is a sample property description." 
                                        onClose={() => setShowModal(false)}
                                      />
                                    )}
                                  </p>
                              </div>
                          </div>
                      </div>
                  </div>
                  
                  <BuildingAmenities featureListingJson={amenities} />
                  {rooms.length > 0 &&  (
                    <div className="list-single-main-item fl-wrap">
                      <RoomType rooms={rooms}  country = {propertiesDetails.city?.country?.name} city={propertiesDetails.city?.name} property={propertiesDetails.name} medias={medias} />
                    </div>
                  )}
                       
                  <div className="box-widget opening-hours">
                    <div className="box-widget-content">
                      <h3>Instant Enquiry  </h3>
                      <span className="fw-separator"></span>
                      <BookingForm />
                    </div>
                  </div>
                  {<FaqListing faqs={faqs} />}


              </div>
            </div>

            <div className="col-md-4">
                <div className="box-widget-wrap">
                   <div className="box-widget-item fl-wrap">
                            <div className="box-widget"><br></br>
                            <div className="box-widget-item-header">
                              <h3 className="text-center">
                                <a href="#"  className="text-danger" onClick={() => setShowOfferModal (true)}> Offers </a> price perweek
                              </h3>

                            </div>
                            {showOfferModal && (
                              <PropertyOfferModal propertyOffer="This is a sample property Offer." 
                                onCloseOffer={() => setShowOfferModal (false)}
                              />
                            )}
                            {propertiesDetails.latitude && propertiesDetails.longitude && (
                              <LocationMap
                                latitude={propertiesDetails.latitude}
                                longitude={propertiesDetails.longitude}
                                title={propertiesDetails.address}
                              />
                            )}
                           
                            </div>
                          </div>

                 

                  <SimilerListing propertiesDetailData={propertiesDetails} />
                </div>
            </div>
           
          </div>
        </div>
      </section>

    
    </Layout>
  );
};

export default PropertyDetail;
