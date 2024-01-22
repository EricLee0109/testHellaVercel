import React from "react";
import { Button } from "../../components/Button";
import { TextField } from "../../components/TextField";
import { Accessibility } from "../../icons/Accessibility";
import { AddOutline136 } from "../../icons/AddOutline136";
import { ArrowTrue } from "../../icons/ArrowTrue";
import { FilledTrue1 } from "../../icons/FilledTrue1";
import { Heart } from "../../icons/Heart";
import { IonSwapHorizontal1 } from "../../icons/IonSwapHorizontal1";
import { PaperPlane2 } from "../../icons/PaperPlane2";
import "./style.css";

export const Index = () => {
  return (
    <div className="index">
      <div className="div-5">
        <div className="overlap">
          <img
            className="image"
            alt="Image"
            src="https://cdn.animaapp.com/projects/65ae1478751d8d2bdf671804/releases/65ae14bd644039d4d5311ee8/img/image-7.png"
          />
          <div className="rectangle" />
          <div className="nav-bar">
            <div className="hella">HELLA</div>
            <div className="text-wrapper-2">Find Tour</div>
            <div className="logged-info">
              <div className="frame-2">
                <div className="div-6">
                  <Heart className="icon-instance-node" color="white" />
                  <div className="text-wrapper-3">Favourites</div>
                </div>
                <div className="text-wrapper-3">|</div>
              </div>
              <div className="div-6">
                <img
                  className="ellipse"
                  alt="Ellipse"
                  src="https://cdn.animaapp.com/projects/65ae1478751d8d2bdf671804/releases/65ae14bd644039d4d5311ee8/img/ellipse-1@2x.png"
                />
                <div className="text-wrapper-3">EricLee</div>
                <div className="ellipse-2" />
                <ArrowTrue className="arrow-down" color="#FFBCFC" />
              </div>
              <div className="log-out">
                <div className="overlap-group">
                  <div className="log-out-2">Logout</div>
                </div>
              </div>
            </div>
            <div className="text-wrapper-4">Find Tour Guide</div>
            <img
              className="logo"
              alt="Logo"
              src="https://cdn.animaapp.com/projects/65ae1478751d8d2bdf671804/releases/65ae14bd644039d4d5311ee8/img/logo1-2@2x.png"
            />
          </div>
          <div className="search-section">
            <img
              className="line"
              alt="Line"
              src="https://cdn.animaapp.com/projects/65ae1478751d8d2bdf671804/releases/65ae14bd644039d4d5311ee8/img/line-4.svg"
            />
            <div className="search-bar">
              <div className="tour-tourguide">
                <div className="div-7">
                  <FilledTrue1 className="icon-instance-node" color="#112211" />
                  <div className="text-wrapper-5">Tour</div>
                </div>
                <img
                  className="line-2"
                  alt="Line"
                  src="https://cdn.animaapp.com/projects/65ae1478751d8d2bdf671804/releases/65ae14bd644039d4d5311ee8/img/line-1.svg"
                />
                <div className="div-7">
                  <Accessibility className="icon-instance-node" />
                  <div className="text-wrapper-5">Tour Guide</div>
                </div>
              </div>
              <div className="tour-selection">
                <TextField
                  className="text-field-instance"
                  icon={<IonSwapHorizontal1 className="icon-instance-node" />}
                  input="Ho Chi Minh - Ha Noi"
                  label="From - To"
                  leadingIcon={false}
                  state="enabled"
                  style="outlined"
                  supportingText={false}
                  textConfigurations="input-text"
                  trailingIcon
                />
                <TextField
                  className="text-field-instance"
                  input="07 Nov 22 - 13 Nov 22"
                  label="Depart- Return"
                  leadingIcon={false}
                  state="enabled"
                  stateLayerClassName="design-component-instance-node"
                  style="outlined"
                  supportingText={false}
                  textConfigurations="input-text"
                  trailingIcon={false}
                />
                <TextField
                  className="text-field-instance"
                  input="1 Passenger, S-Class"
                  label="Passenger - Class"
                  leadingIcon={false}
                  state="enabled"
                  style="outlined"
                  supportingText={false}
                  textConfigurations="input-text"
                  trailingIcon={false}
                />
              </div>
            </div>
            <div className="find-bar">
              <Button
                changeIcon="left"
                className="button-instance"
                divClassName="button-2"
                icon={<AddOutline136 className="icon-instance-node-2" />}
                size="large"
                state="hover"
                text="Add Promo Code"
                type="ghost"
              />
              <Button
                changeIcon="left"
                className="button-instance"
                frameClassName="button-3"
                icon={<PaperPlane2 className="icon-instance-node-2" />}
                size="large"
                state="hover"
                text="Show Tours"
                type="filled"
              />
            </div>
          </div>
          <div className="search-section">
            <img
              className="line"
              alt="Line"
              src="https://cdn.animaapp.com/projects/65ae1478751d8d2bdf671804/releases/65ae14bd644039d4d5311ee8/img/line-4.svg"
            />
            <div className="search-bar">
              <div className="tour-tourguide">
                <div className="div-7">
                  <FilledTrue1 className="icon-instance-node" color="#112211" />
                  <div className="text-wrapper-5">Tour</div>
                </div>
                <img
                  className="line-2"
                  alt="Line"
                  src="https://cdn.animaapp.com/projects/65ae1478751d8d2bdf671804/releases/65ae14bd644039d4d5311ee8/img/line-1.svg"
                />
                <div className="div-7">
                  <Accessibility className="icon-instance-node" />
                  <div className="text-wrapper-5">Tour Guide</div>
                </div>
              </div>
              <div className="tour-selection">
                <TextField
                  className="text-field-instance"
                  icon={<IonSwapHorizontal1 className="icon-instance-node" />}
                  input="Ho Chi Minh - Ha Noi"
                  label="From - To"
                  leadingIcon={false}
                  state="enabled"
                  style="outlined"
                  supportingText={false}
                  textConfigurations="input-text"
                  trailingIcon
                />
                <TextField
                  className="text-field-instance"
                  input="07 Nov 22 - 13 Nov 22"
                  label="Depart- Return"
                  leadingIcon={false}
                  state="enabled"
                  stateLayerClassName="design-component-instance-node"
                  style="outlined"
                  supportingText={false}
                  textConfigurations="input-text"
                  trailingIcon={false}
                />
                <TextField
                  className="text-field-instance"
                  input="1 Passenger, S-Class"
                  label="Passenger - Class"
                  leadingIcon={false}
                  state="enabled"
                  style="outlined"
                  supportingText={false}
                  textConfigurations="input-text"
                  trailingIcon={false}
                />
              </div>
            </div>
            <div className="find-bar">
              <Button
                changeIcon="left"
                className="button-instance"
                divClassName="button-2"
                icon={<AddOutline136 className="icon-instance-node-2" />}
                size="large"
                state="hover"
                text="Add Promo Code"
                type="ghost"
              />
              <Button
                changeIcon="left"
                className="button-instance"
                frameClassName="button-3"
                icon={<PaperPlane2 className="icon-instance-node-2" />}
                size="large"
                state="hover"
                text="Show Tours"
                type="filled"
              />
            </div>
          </div>
        </div>
        <div className="overlap-2">
          <div className="plan-section">
            <div className="plan-title">
              <div className="frame-3">
                <div className="plan-your-perfect">Plan Your Perfect Trip</div>
                <p className="search-flights">Search Flights &amp; Places Hire to our most popular destinations</p>
              </div>
              <Button
                changeIcon="none"
                className="button-4"
                frameClassName="button-5"
                size="medium"
                state="default"
                text1="See more places"
                type="outlined"
              />
            </div>
            <div className="cards-list">
              <div className="cards">
                <div className="card">
                  <div className="avatar">
                    <img
                      className="rectangle-2"
                      alt="Rectangle"
                      src="https://cdn.animaapp.com/projects/65ae1478751d8d2bdf671804/releases/65ae14bd644039d4d5311ee8/img/rectangle-3@2x.png"
                    />
                  </div>
                  <div className="frame-4">
                    <div className="text-wrapper-6">Istanbul, Turkey</div>
                    <div className="frame-5">
                      <div className="text-wrapper-7">Tours</div>
                      <div className="text-wrapper-7">•</div>
                      <div className="text-wrapper-8">Tour Guide</div>
                    </div>
                  </div>
                </div>
                <div className="card">
                  <div className="avatar">
                    <img
                      className="rectangle-2"
                      alt="Rectangle"
                      src="https://cdn.animaapp.com/projects/65ae1478751d8d2bdf671804/releases/65ae14bd644039d4d5311ee8/img/rectangle-3-1@2x.png"
                    />
                  </div>
                  <div className="frame-4">
                    <div className="text-wrapper-6">Sydney, Australia</div>
                    <div className="frame-5">
                      <div className="text-wrapper-7">Tours</div>
                      <div className="text-wrapper-7">•</div>
                      <div className="text-wrapper-8">Tour Guide</div>
                    </div>
                  </div>
                </div>
                <div className="card">
                  <div className="avatar">
                    <img
                      className="rectangle-2"
                      alt="Rectangle"
                      src="https://cdn.animaapp.com/projects/65ae1478751d8d2bdf671804/releases/65ae14bd644039d4d5311ee8/img/rectangle-4@2x.png"
                    />
                  </div>
                  <div className="frame-4">
                    <div className="text-wrapper-6">Baku, Azerbaijan</div>
                    <div className="frame-5">
                      <div className="text-wrapper-7">Tours</div>
                      <div className="text-wrapper-7">•</div>
                      <div className="text-wrapper-8">Tour Guide</div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="cards">
                <div className="card">
                  <div className="avatar">
                    <img
                      className="rectangle-2"
                      alt="Rectangle"
                      src="https://cdn.animaapp.com/projects/65ae1478751d8d2bdf671804/releases/65ae14bd644039d4d5311ee8/img/rectangle-4-1@2x.png"
                    />
                  </div>
                  <div className="frame-4">
                    <div className="text-wrapper-6">Hồ Tràm, Vũng Tàu</div>
                    <div className="frame-5">
                      <div className="text-wrapper-7">Tours</div>
                      <div className="text-wrapper-7">•</div>
                      <div className="text-wrapper-8">Tour Guide</div>
                    </div>
                  </div>
                </div>
                <div className="card">
                  <div className="avatar">
                    <img
                      className="rectangle-3"
                      alt="Rectangle"
                      src="https://cdn.animaapp.com/projects/65ae1478751d8d2bdf671804/releases/65ae14bd644039d4d5311ee8/img/rectangle-3-2@2x.png"
                    />
                  </div>
                  <div className="frame-4">
                    <div className="text-wrapper-6">Paris, France</div>
                    <div className="frame-5">
                      <div className="text-wrapper-7">Tours</div>
                      <div className="text-wrapper-7">•</div>
                      <div className="text-wrapper-8">Tour Guide</div>
                    </div>
                  </div>
                </div>
                <div className="card">
                  <div className="avatar">
                    <img
                      className="rectangle-3"
                      alt="Rectangle"
                      src="https://cdn.animaapp.com/projects/65ae1478751d8d2bdf671804/releases/65ae14bd644039d4d5311ee8/img/rectangle-4-2@2x.png"
                    />
                  </div>
                  <div className="frame-4">
                    <div className="text-wrapper-6">New York, US</div>
                    <div className="frame-5">
                      <div className="text-wrapper-7">Tours</div>
                      <div className="text-wrapper-7">•</div>
                      <div className="text-wrapper-8">Tour Guide</div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="cards">
                <div className="card">
                  <div className="avatar">
                    <img
                      className="rectangle-2"
                      alt="Rectangle"
                      src="https://cdn.animaapp.com/projects/65ae1478751d8d2bdf671804/releases/65ae14bd644039d4d5311ee8/img/rectangle-3-3@2x.png"
                    />
                  </div>
                  <div className="frame-4">
                    <div className="text-wrapper-6">London, UK</div>
                    <div className="frame-5">
                      <div className="text-wrapper-7">Tours</div>
                      <div className="text-wrapper-7">•</div>
                      <div className="text-wrapper-8">Tour Guide</div>
                    </div>
                  </div>
                </div>
                <div className="card">
                  <div className="avatar">
                    <img
                      className="rectangle-3"
                      alt="Rectangle"
                      src="https://cdn.animaapp.com/projects/65ae1478751d8d2bdf671804/releases/65ae14bd644039d4d5311ee8/img/rectangle-3-4@2x.png"
                    />
                  </div>
                  <div className="frame-4">
                    <div className="text-wrapper-6">Tokyo, Japan</div>
                    <div className="frame-5">
                      <div className="text-wrapper-7">Tours</div>
                      <div className="text-wrapper-7">•</div>
                      <div className="text-wrapper-8">Tour Guide</div>
                    </div>
                  </div>
                </div>
                <div className="card">
                  <div className="avatar">
                    <img
                      className="rectangle-2"
                      alt="Rectangle"
                      src="https://cdn.animaapp.com/projects/65ae1478751d8d2bdf671804/releases/65ae14bd644039d4d5311ee8/img/rectangle-4-3@2x.png"
                    />
                  </div>
                  <div className="frame-4">
                    <div className="text-wrapper-6">Dubai, UAE</div>
                    <div className="frame-5">
                      <div className="text-wrapper-7">Tours</div>
                      <div className="text-wrapper-7">•</div>
                      <div className="text-wrapper-8">Tour Guide</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="show">
            <div className="overlap-group-wrapper">
              <div className="overlap-group-2">
                <div className="rectangle-4" />
                <div className="frame-6">
                  <div className="frame-7">
                    <div className="text-wrapper-9">Tours</div>
                    <p className="p">Search our tour for hot trend place on around the world!</p>
                  </div>
                  <Button
                    changeIcon="left"
                    className="button-6"
                    frameClassName="button-3"
                    icon={<PaperPlane2 className="icon-instance-node-2" />}
                    size="large"
                    state="hover"
                    text="Show Tours"
                    type="filled"
                  />
                </div>
              </div>
            </div>
            <div className="overlap-wrapper">
              <div className="frame-wrapper">
                <div className="frame-8">
                  <div className="overlap-group-3">
                    <div className="rectangle-5" />
                    <div className="frame-9">
                      <div className="frame-7">
                        <div className="text-wrapper-9">Tour Guides</div>
                        <p className="p">Search our tour guide for your tour to make better experience!</p>
                      </div>
                      <Button
                        changeIcon="left"
                        className="button-6"
                        frameClassName="button-3"
                        icon={<PaperPlane2 className="icon-instance-node-2" />}
                        size="large"
                        state="hover"
                        text="Show Tour Guides"
                        type="filled"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="testimonial">
          <div className="text-wrapper-10">Testimonial</div>
          <div className="card-2">
            <div className="overlap-group-4">
              <div className="rectangle-6" />
              <img
                className="mask-group"
                alt="Mask group"
                src="https://cdn.animaapp.com/projects/65ae1478751d8d2bdf671804/releases/65ae14bd644039d4d5311ee8/img/mask-group@2x.png"
              />
              <p className="text-wrapper-11">‘’This is a peace and beauty place in Vietnam’’ - Ho Chi Minh City</p>
              <div className="ellipse-3" />
            </div>
          </div>
          <div className="card-3">
            <div className="overlap-3">
              <div className="rectangle-7" />
              <img
                className="mask-group-2"
                alt="Mask group"
                src="https://cdn.animaapp.com/projects/65ae1478751d8d2bdf671804/releases/65ae14bd644039d4d5311ee8/img/mask-group-1@2x.png"
              />
              <p className="text-wrapper-12">‘’This is a peace and beauty place in Vietnam’’ - Vung Tau City</p>
              <div className="ellipse-4" />
            </div>
          </div>
          <div className="card-4">
            <div className="overlap-4">
              <div className="rectangle-8" />
              <img
                className="mask-group"
                alt="Mask group"
                src="https://cdn.animaapp.com/projects/65ae1478751d8d2bdf671804/releases/65ae14bd644039d4d5311ee8/img/mask-group-2@2x.png"
              />
              <p className="text-wrapper-11">‘’This is a peace and beauty place in Vietnam’’ - Da Lat City</p>
              <div className="ellipse-5" />
            </div>
          </div>
        </div>
        <div className="overlap-5">
          <div className="frame-10">
            <div className="frame-11">
              <div className="logo-2">
                <img
                  className="logo-3"
                  alt="Logo"
                  src="https://cdn.animaapp.com/projects/65ae1478751d8d2bdf671804/releases/65ae14bd644039d4d5311ee8/img/logo1-2-1@2x.png"
                />
                <div className="hella-2">HELLA</div>
              </div>
              <img
                className="frame-12"
                alt="Frame"
                src="https://cdn.animaapp.com/projects/65ae1478751d8d2bdf671804/releases/65ae14bd644039d4d5311ee8/img/frame-2608749.svg"
              />
            </div>
            <div className="frame-13">
              <div className="frame-14">
                <div className="text-wrapper-13">About Us</div>
                <div className="frame-15">
                  <div className="text-wrapper-14">Our Story</div>
                  <div className="text-wrapper-15">Work with us</div>
                </div>
              </div>
              <div className="frame-16">
                <div className="text-wrapper-13">Contact Us</div>
                <input
                  className="email"
                  placeholder="Email: lethaikhoa0109@gmail.com&lt;br/&gt;&amp;nbsp;&amp;nbsp;&amp;nbsp;&amp;nbsp;&amp;nbsp;&amp;nbsp;&amp;nbsp;&amp;nbsp;&amp;nbsp;&amp;nbsp;&amp;nbsp;&amp;nbsp;&amp;nbsp;&amp;nbsp;+84929150209"
                  type="email"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="submit-email">
          <div className="overlap-6">
            <div className="text-wrapper-16">Email...</div>
          </div>
        </div>
        <div className="text-wrapper-17">Travel with US</div>
        <Button
          changeIcon="left"
          className="submit-btn"
          divClassName="submit-btn-3"
          frameClassName="submit-btn-2"
          hasDiv={false}
          size="large"
          state="hover"
          text="Send"
          type="filled"
        />
      </div>
    </div>
  );
};
