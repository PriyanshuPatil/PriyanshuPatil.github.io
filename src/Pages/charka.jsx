
import style from "./Header.module.css";
import {
  border,
  Box,
  Button,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  Flex,
  Image,
  Input,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Stack,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import { FiChevronDown } from "react-icons/fi";
import { MdMenu, MdOutlineLanguage } from "react-icons/md";
import { ChevronDownIcon } from "@chakra-ui/icons";
import { motion } from "framer-motion";
import { useNavigate } from "react-router";
<Menu>
  <MenuButton
    px={4}
    py={2}
    transition='all 0.2s'
    borderRadius='md'
    borderWidth='1px'
    _hover={{ bg: 'gray.400' }}
    _expanded={{ bg: 'blue.400' }}
    _focus={{ boxShadow: 'outline' }}
  >
    File <ChevronDownIcon />
  </MenuButton>
  <MenuList>
    <motion.div
              // initial={{
              //   y:-200,
              //   opacity:0
              // }}
              // whileInView={{
              //   y:1,
              //   opacity:1
              // }}
              // transition={{duration:2}}
              >
                <MenuItem
                  style={{ width: "100%", display: "flex row" }}
                  gap={14}
                >
                  <div
                    style={{
                      width: "23%",
                      marginTop: "30px",
                      marginLeft: "80px",
                    }}
                  >
                    <h6
                      style={{
                        textTransform: "uppercase",
                        color: "gray",
                        fontSize: "14px",
                        fontWeight: "bold",
                        marginBottom: "20px",
                      }}
                    >
                      For Teams
                    </h6>

                    <Box
                      style={{
                        color: "white",
                        display: "flex",
                        position: "relative",
                        marginBottom: "20px",
                      }}
                      gap={5}
                      _hover={{ backgroundColor: "rgba(255,255,255,0.1)" }}
                      className={style.menuDiv}
                    >
                      <Image
                        style={{}}
                        src="https://web-static.wrike.com/tp/storage/uploads/62538033-1d86-410b-bef8-73a09a6c52be/icon-header-tab1-marketing.svg"
                      />
                      <Box>
                        <h1 style={{ fontWeight: "bold" }}>Marketing</h1>
                        <p style={{ fontSize: "16px" }}>
                          Streamline proofing and reporting for seamless
                          campaigns.
                        </p>
                      </Box>
                    </Box>
                    <Box
                      style={{
                        color: "white",
                        display: "flex",
                        position: "relative",
                        marginBottom: "20px",
                      }}
                      gap={5}
                      _hover={{ backgroundColor: "rgba(255,255,255,0.1)" }}
                      className={style.menuDiv}
                    >
                      <Image
                        style={{}}
                        src="https://web-static.wrike.com/tp/storage/uploads/62538033-1d86-410b-bef8-73a09a6c52be/icon-header-tab1-case.svg"
                      />
                      <Box>
                        <h1 style={{ fontWeight: "bold" }}>
                          Professional Services
                        </h1>
                        <p style={{ fontSize: "16px" }}>
                          Take control of billable hours and increase client
                          satisfaction.
                        </p>
                      </Box>
                    </Box>
                    <Box
                      style={{
                        color: "white",
                        display: "flex",
                        position: "relative",
                        marginBottom: "20px",
                      }}
                      gap={5}
                      _hover={{ backgroundColor: "rgba(255,255,255,0.1)" }}
                      className={style.menuDiv}
                    >
                      <Image
                        style={{}}
                        src="https://web-static.wrike.com/tp/storage/uploads/62538033-1d86-410b-bef8-73a09a6c52be/icon-header-tab1-project-1.svg"
                      />
                      <Box>
                        <h1 style={{ fontWeight: "bold" }}>Project Managers</h1>
                        <p style={{ fontSize: "16px" }}>
                          Plan Agile projects, track deadlines, and deliver
                          results.
                        </p>
                      </Box>
                    </Box>
                    <Box
                      style={{
                        color: "white",
                        display: "flex",
                        position: "relative",
                        marginBottom: "20px",
                      }}
                      gap={5}
                      _hover={{ backgroundColor: "rgba(255,255,255,0.1)" }}
                      className={style.menuDiv}
                    >
                      <Image
                        style={{}}
                        src="https://web-static.wrike.com/tp/storage/uploads/62538033-1d86-410b-bef8-73a09a6c52be/icon-header-tab1-palette.svg"
                      />
                      <Box>
                        <h1 style={{ fontWeight: "bold" }}>
                          Creative & Design
                        </h1>
                        <p style={{ fontSize: "16px" }}>
                          Create high-quality assets and get them approved in
                          record time.
                        </p>
                      </Box>
                    </Box>
                  </div>
                  <div
                    style={{
                      width: "23%",
                      marginTop: "30px",
                      marginLeft: "80px",
                    }}
                  >
                    <h6
                      style={{
                        textTransform: "uppercase",
                        color: "gray",
                        fontSize: "14px",
                        fontWeight: "bold",
                        marginBottom: "20px",
                      }}
                    >
                      Use cases
                    </h6>

                    <Box
                      style={{
                        color: "white",
                        display: "flex",
                        position: "relative",
                        marginBottom: "20px",
                      }}
                      gap={5}
                      _hover={{ backgroundColor: "rgba(255,255,255,0.1)" }}
                      className={style.menuDiv}
                    >
                      <Image
                        style={{}}
                        src="https://web-static.wrike.com/tp/storage/uploads/62538033-1d86-410b-bef8-73a09a6c52be/icon-header-tab1-dependency.svg"
                      />
                      <Box>
                        <h1 style={{ fontWeight: "bold" }}>
                          Workflow Management
                        </h1>
                        <p style={{ fontSize: "16px" }}>
                          Use custom statuses and automate your team workflows.
                        </p>
                      </Box>
                    </Box>
                    <Box
                      style={{
                        color: "white",
                        display: "flex",
                        position: "relative",
                        marginBottom: "20px",
                      }}
                      gap={5}
                      _hover={{ backgroundColor: "rgba(255,255,255,0.1)" }}
                      className={style.menuDiv}
                    >
                      <Image
                        style={{}}
                        src="https://web-static.wrike.com/tp/storage/uploads/62538033-1d86-410b-bef8-73a09a6c52be/icon-header-tab1-board.svg"
                      />
                      <Box>
                        <h1 style={{ fontWeight: "bold" }}>Task Management</h1>
                        <p style={{ fontSize: "16px" }}>
                          Organize incoming requests and eliminate repetitive
                          tasks.
                        </p>
                      </Box>
                    </Box>
                    <Box
                      style={{
                        color: "white",
                        display: "flex",
                        position: "relative",
                        marginBottom: "20px",
                      }}
                      gap={5}
                      _hover={{ backgroundColor: "rgba(255,255,255,0.1)" }}
                      className={style.menuDiv}
                    >
                      <Image
                        style={{}}
                        src="https://web-static.wrike.com/tp/storage/uploads/62538033-1d86-410b-bef8-73a09a6c52be/icon-header-tab1-pie-chart.svg"
                      />
                      <Box>
                        <h1 style={{ fontWeight: "bold" }}>Project Tracking</h1>
                        <p style={{ fontSize: "16px" }}>
                          Track progress and monitor multiple projects with
                          dashboards.
                        </p>
                      </Box>
                    </Box>
                    <Box
                      style={{
                        color: "white",
                        display: "flex",
                        position: "relative",
                        marginBottom: "20px",
                      }}
                      gap={5}
                      _hover={{ backgroundColor: "rgba(255,255,255,0.1)" }}
                      className={style.menuDiv}
                    >
                      <Image
                        style={{}}
                        src="https://web-static.wrike.com/tp/storage/uploads/62538033-1d86-410b-bef8-73a09a6c52be/icon-header-tab1-folder.svg"
                      />
                      <Box>
                        <h1 style={{ fontWeight: "bold" }}>
                          Resource Management
                        </h1>
                        <p style={{ fontSize: "16px" }}>
                          View team workloads and reallocate tasks to avoid
                          burnout.
                        </p>
                      </Box>
                    </Box>
                  </div>
                  <div
                    style={{
                      width: "23%",
                      marginTop: "30px",
                      marginLeft: "80px",
                    }}
                  >
                    <h6
                      style={{
                        textTransform: "uppercase",
                        color: "gray",
                        fontSize: "14px",
                        fontWeight: "bold",
                        marginBottom: "20px",
                      }}
                    >
                      APPS & INTEGRATIONS
                    </h6>

                    <Box
                      style={{
                        color: "white",
                        display: "flex",
                        position: "relative",
                        marginBottom: "20px",
                      }}
                      gap={5}
                      _hover={{ backgroundColor: "rgba(255,255,255,0.1)" }}
                      className={style.menuDiv}
                    >
                      <Image
                        style={{}}
                        src="https://web-static.wrike.com/tp/storage/uploads/62538033-1d86-410b-bef8-73a09a6c52be/icon-header-tab1-inregration-slack.svg"
                      />
                      <Box>
                        <h1 style={{ fontWeight: "bold" }}>Slack</h1>
                        <p style={{ fontSize: "16px" }}>
                          Turn a casual Slack chat into an actionable Wrike
                          task.
                        </p>
                      </Box>
                    </Box>
                    <Box
                      style={{
                        color: "white",
                        display: "flex",
                        position: "relative",
                        marginBottom: "20px",
                      }}
                      gap={5}
                      _hover={{ backgroundColor: "rgba(255,255,255,0.1)" }}
                      className={style.menuDiv}
                    >
                      <Image
                        style={{}}
                        src="https://web-static.wrike.com/tp/storage/uploads/62538033-1d86-410b-bef8-73a09a6c52be/icon-header-tab1-inregration-salesforce.svg"
                      />
                      <Box>
                        <h1 style={{ fontWeight: "bold" }}>Salesforce</h1>
                        <p style={{ fontSize: "16px" }}>
                          Integrate client data seamlessly between Wrike and
                          Salesforce.
                        </p>
                      </Box>
                    </Box>
                    <Box
                      style={{
                        color: "white",
                        display: "flex",
                        position: "relative",
                        marginBottom: "20px",
                      }}
                      gap={5}
                      _hover={{ backgroundColor: "rgba(255,255,255,0.1)" }}
                      className={style.menuDiv}
                    >
                      <Image
                        style={{}}
                        src="https://web-static.wrike.com/tp/storage/uploads/62538033-1d86-410b-bef8-73a09a6c52be/icon-header-tab1-inregration-microsoft-teams.svg"
                      />
                      <Box>
                        <h1 style={{ fontWeight: "bold" }}> Microsoft Teams</h1>
                        <p style={{ fontSize: "16px" }}>
                          Collaborate on Wrike projects without leaving
                          Microsoft Teams.
                        </p>
                      </Box>
                    </Box>
                    <Box
                      style={{
                        color: "white",
                        display: "flex",
                        position: "relative",
                        marginBottom: "20px",
                      }}
                      gap={5}
                      _hover={{ backgroundColor: "rgba(255,255,255,0.1)" }}
                      className={style.menuDiv}
                    >
                      <Image
                        style={{}}
                        src="https://web-static.wrike.com/tp/storage/uploads/62538033-1d86-410b-bef8-73a09a6c52be/icon-header-tab1-inregration-adobe.svg"
                      />
                      <Box>
                        <h1 style={{ fontWeight: "bold" }}>Adobe</h1>
                        <p style={{ fontSize: "16px" }}>
                          Accelerate Wrike design tasks from Adobe Creative
                          Cloud.
                        </p>
                      </Box>
                    </Box>
                  </div>
                </MenuItem>
                <MenuItem></MenuItem>
                {/* <MenuItem onClick={() => console.log("hi")}>Download</MenuItem>
                <MenuItem>Create a Copy</MenuItem>
                <MenuItem>Mark as Draft</MenuItem>
                <MenuItem>Delete</MenuItem>
                <MenuItem>Attend a Workshop</MenuItem> */}
              </motion.div>
  </MenuList>
</Menu>