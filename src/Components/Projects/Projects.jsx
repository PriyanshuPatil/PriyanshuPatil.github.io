import React from 'react'
import { useSelector } from 'react-redux';
import { SkillsData } from '../../Data/SkillsData';
import GitHubCalendar from 'react-github-calendar'
import { ProjectData } from '../../Data/ProjectData';
import { Box, Button, Grid, GridItem, Heading } from '@chakra-ui/react';
import { FiGithub } from "react-icons/fi";
import { ImLink } from "react-icons/im";

const Projects = () => {
  const themeColor = useSelector((store) => store.Theme.theme);
  return (
    <div name="Project" style={{ paddingTop: "100px" }}>

      <div

        style={{
          boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
          margin: "auto",
          width: "80%",
          borderRadius: "20px",

        }}
      >
        <div
          style={{
            backgroundColor: themeColor,
            color: "white",
            padding: "20px",
            display: "grid",
            justifyContent: "space-between",
            gridTemplateColumns: "repeat(1,1fr)",
            borderRadius: "20px 20px 0px 0px",
          }}
        >
          <h2 style={{ fontSize: "45px", fontWeight: "700", margin: "auto", textAlign: "center" }}>
            Projects
          </h2>
        </div>

        <Grid templateColumns={[
          "repeat(1, 1fr)",
          "repeat(1, 1fr)",
          "repeat(2, 1fr)",
          "repeat(2, 1fr)",
        ]}
          gap={10} style={{ width: "full", gap: "60px 30px", padding: "3%", textAlign: "center" }} >
          {ProjectData.map(({ id, src, netlify, github, des, tech ,title}) => (
            <GridItem key={id} style={{ display: "grid", gridTemplateColumns: "repeat(1,1fr)", borderRadius: "0.5rem", padding: "10px", boxShadow: `0 4px 6px -1px  ${themeColor}, 0 2px 4px -1px rgba(0, 0, 0, 0.06)` }} >
              <div>
                <img
                  width={"100%"}
                  src={src}

                  alt=""
                  style={{ transitionDuration: "200ms", borderRadius: "0.375rem" }} />
              </div>
              <div>
              <Heading color="white" backgroundColor={themeColor} fontSize={22} mt="15px" p={"4px 4px"}  mb="15px" alignContent={"center"}>{title}</Heading>
                <u />

                <Heading color={themeColor} fontSize={16} mt="15px" alignContent={"center"}>Summary :-</Heading>
                <div style={{ padding: "5px" }} >{des}</div>
                <u />
                <Heading color={themeColor} fontSize={"16px"} alignContent={"center"}>Tech Stack Used :-</Heading>
                <Grid w="70%" m="auto" mt={"10px"} justifyContent="space-between" templateColumns={[
                  "repeat(1, 1fr)",
                  "repeat(2, 1fr)",
                  "repeat(3, 1fr)",
                  "repeat(3, 1fr)",
                ]} gap={2}>
                  {tech.map((el) => {
                    return (<GridItem style={{ fontSize: "14px", fontWeight: "100", padding: "0px 5px", border: `1px solid ${themeColor}`, borderRadius: "5px" }} >{el}</GridItem>)
                  })}

                </Grid>
                <div style={{ display: "grid", gridTemplateColumns: "repeat(2,1fr)", gap: "20px", width: "20%", margin: "auto", alignItems: "center", justifyContent: "center" }}>
                  <Button
                    style={{
                      backgroundColor: themeColor,
                      boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
                      display: "block",
                      color: "white",
                      margin: "20px 0px",
                      width: "100px",
                      fontWeight: "300",
                      display: "flex", gap: "10px",
                    }}
                    onClick={() => { window.open(netlify, '_blank') }}
                  >
                    <a href={netlify}> Demo </a><ImLink />
                  </Button>
                  <Button
                    style={{
                      backgroundColor: themeColor,
                      color: "white",
                      boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
                      display: "block",
                      margin: "20px 0px",
                      width: "100px",
                      fontWeight: "300",
                      display: "flex", gap: "10px"
                    }}
                    onClick={() => { window.open(github, '_blank') }}
                  >
                    <a >Code </a><FiGithub />
                  </Button>

                </div>
              </div>

            </GridItem>
          ))}
        </Grid>
      </div>

    </div>


  )
}

export default Projects 