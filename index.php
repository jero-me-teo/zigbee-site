<!DOCTYPE html>
<html>
	<head>
		<meta charset="utf-8">
		<title>JeroMeteo</title>
		<link rel="icon" href="site/cloudii.png">
		<link rel="stylesheet" href="site/data/core.css">
		<script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
		<script src="site/js/navbar-scripts.js" defer></script>
		
		<!-- Fichiers à mettre en cache pour usage proche -->
		<link rel="preload" href="site/tabs/measures.html">
		<link rel="preload" href="site/tabs/graphs.html">
		<link rel="preload" href="site/tabs/history.html">
	</head>
	<body>
		<div id="content-holder">
			<!-- Div titre -->
			<div id="title-holder">
				<img src="site/pics/sun.png" width="70" align="left" id="suntitle">
				<h1>JeroMeteo</h1>
				<img src="site/pics/cloud.png" width="70" align="right" id="cloudtitle">
			</div>
			<div class="relief-block" id="tab-bar">
				<!-- Les commentaires sont destinés à clarifier le code sans que HTML ne mettre des espaces superflus au milieu -->
				<span class="navbar-button" id="measures" style="width:30%;" onclick="focusMeasures()">Relevés</span><!--
				--><span class="vbar"></span><!--
				--><span class="navbar-button" id="graphs" style="width:30%;" onclick="focusGraphs()">Graphiques</span><!--
				--><span class="vbar"></span><!--
				--><span class="navbar-button" id="history" style="width:30%;" onclick="focusHistory()">Historique</span>
			</div>
			
			<!-- Contenu principal -->
			<div id="main">
				<!-- Main content here -->
				content here mf
				<?php
					echo "pok<br>";
				?>
			</div>
			
			<!-- Footer avec informations -->
			<div id="bottom-wrap">
				<div>DUT GEII 2e année 2021-2022, Université Aix-Marseille, Site Saint-Jérôme<br>
				Projet tutoré "Station Météo" sous la supervision de MM. DEHAESE Nicolas et VAUCHE Rémy
				<br>Membres du groupe: ABDALLAH Karim, BOSCO Benjamin, CHAOUCH Shainez, MOURALY Mina, TOUSSAINT Jean-Sébastien
					<br><a id="bottom-link" href="https://github.com/jero-me-teo/zigbee-site">Code source du site</a></div>
			</div>
		</div>
	</body>
</html>
