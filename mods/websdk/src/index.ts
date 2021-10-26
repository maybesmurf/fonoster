/*
 * Copyright (C) 2021 by Fonoster Inc (https://fonoster.com)
 * http://github.com/fonoster/fonos
 *
 * This file is part of Project Fonos
 *
 * Licensed under the MIT License (the "License");
 * you may not use this file except in compliance with
 * the License. You may obtain a copy of the License at
 *
 *    https://opensource.org/licenses/MIT
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
import Agents from "./agents";
import Auth from "./auth";
import Secrets from "./secrets";
import CallManager from "./callmanager";
import Domains from "./domains";
import Numbers from "./numbers";
import Projects from "./projects";
import Storage from "./storage";
import Users from "./users";
import Providers from "./providers";
/* 
import Funcs from "./funcs";
*/

const Fonos = {
  Agents,
  Auth,
  Secrets,
  CallManager,
  Domains,
  Numbers,
  Projects,
  Storage,
  Users,
  Providers
  /* ,
  Funcs,

  */
};

export {Fonos as default};

// WARNING: Workaround to support commonjs clients
module.exports = Fonos;
