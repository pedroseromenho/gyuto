-- phpMyAdmin SQL Dump
-- version 4.8.3
-- https://www.phpmyadmin.net/
--
-- Hôte : localhost
-- Généré le :  jeu. 27 déc. 2018 à 01:45
-- Version du serveur :  10.1.36-MariaDB
-- Version de PHP :  7.2.10

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de données :  `gyuto`
--

-- --------------------------------------------------------

--
-- Structure de la table `albummusics`
--

CREATE TABLE `albummusics` (
  `id` int(10) UNSIGNED NOT NULL,
  `titleAlbumMusic` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `urlAlbumOrder` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `pagemusic_id` int(10) UNSIGNED DEFAULT NULL,
  `imagepage_id` int(10) UNSIGNED DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Structure de la table `albummusic_music`
--

CREATE TABLE `albummusic_music` (
  `id` int(10) UNSIGNED NOT NULL,
  `albummusic_id` int(10) UNSIGNED NOT NULL,
  `music_id` int(10) UNSIGNED NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Structure de la table `albums`
--

CREATE TABLE `albums` (
  `id` int(10) UNSIGNED NOT NULL,
  `titleFr` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `titleEn` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Structure de la table `album_imagepage`
--

CREATE TABLE `album_imagepage` (
  `id` int(10) UNSIGNED NOT NULL,
  `album_id` int(10) UNSIGNED NOT NULL,
  `imagepage_id` int(10) UNSIGNED NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Structure de la table `events`
--

CREATE TABLE `events` (
  `id` int(10) UNSIGNED NOT NULL,
  `title` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `datestart` date NOT NULL,
  `dateend` date NOT NULL,
  `hourstart` time NOT NULL,
  `hourend` time NOT NULL,
  `place` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `number` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `street` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `zipCode` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `city` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `country` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `descriptionfr` longtext COLLATE utf8mb4_unicode_ci NOT NULL,
  `descriptionen` longtext COLLATE utf8mb4_unicode_ci NOT NULL,
  `imagepage_id` int(10) UNSIGNED DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Structure de la table `imagepages`
--

CREATE TABLE `imagepages` (
  `id` int(10) UNSIGNED NOT NULL,
  `titleIFr` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `titleIEn` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `legendIFr` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `legendIEn` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `nameImage` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `cover` tinyint(1) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Structure de la table `imagepage_paragraph`
--

CREATE TABLE `imagepage_paragraph` (
  `id` int(10) UNSIGNED NOT NULL,
  `imagepage_id` int(10) UNSIGNED NOT NULL,
  `paragraph_id` int(10) UNSIGNED NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Structure de la table `infos`
--

CREATE TABLE `infos` (
  `id` int(10) UNSIGNED NOT NULL,
  `index_title` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `titleInFr` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `titleInEn` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `parent_id` int(10) UNSIGNED DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Structure de la table `intros`
--

CREATE TABLE `intros` (
  `id` int(10) UNSIGNED NOT NULL,
  `urlVideoFr` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `urlVideoEn` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `quoteVideoFr` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `quoteVideoEn` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `legendVideoFr` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `legendVideoEn` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Structure de la table `migrations`
--

CREATE TABLE `migrations` (
  `id` int(10) UNSIGNED NOT NULL,
  `migration` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `batch` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Structure de la table `musics`
--

CREATE TABLE `musics` (
  `id` int(10) UNSIGNED NOT NULL,
  `urlMusic` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `titleMusic` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `durationMusic` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Structure de la table `pagemusics`
--

CREATE TABLE `pagemusics` (
  `id` int(10) UNSIGNED NOT NULL,
  `urlVideoMusicFr` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `urlVideoMusicEn` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `legendMusicFr` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `legendMusicEn` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `titleMusicFr` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `titleMusicEn` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `textMusicFr` longtext COLLATE utf8mb4_unicode_ci NOT NULL,
  `textMusicEn` longtext COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Structure de la table `paragraphs`
--

CREATE TABLE `paragraphs` (
  `id` int(10) UNSIGNED NOT NULL,
  `titleParFr` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `titleParEn` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `textParFr` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `textParEn` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `info_id` int(10) UNSIGNED DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Structure de la table `password_resets`
--

CREATE TABLE `password_resets` (
  `email` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `token` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Structure de la table `users`
--

CREATE TABLE `users` (
  `id` int(10) UNSIGNED NOT NULL,
  `name` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `email` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `email_verified_at` timestamp NULL DEFAULT NULL,
  `password` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `remember_token` varchar(100) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `type` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT 'default'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Structure de la table `videos`
--

CREATE TABLE `videos` (
  `id` int(10) UNSIGNED NOT NULL,
  `titleVFr` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `titleVEn` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `category` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `citationVFr` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `citationVEn` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `legendVFr` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `legendVEn` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `urlVideoFr` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `urlVideoEn` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `durationVideo` double(8,2) DEFAULT NULL,
  `imagepage_id` int(10) UNSIGNED DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Index pour les tables déchargées
--

--
-- Index pour la table `albummusics`
--
ALTER TABLE `albummusics`
  ADD PRIMARY KEY (`id`);

--
-- Index pour la table `albummusic_music`
--
ALTER TABLE `albummusic_music`
  ADD PRIMARY KEY (`id`),
  ADD KEY `albummusic_music_albummusic_id_foreign` (`albummusic_id`),
  ADD KEY `albummusic_music_music_id_foreign` (`music_id`);

--
-- Index pour la table `albums`
--
ALTER TABLE `albums`
  ADD PRIMARY KEY (`id`);

--
-- Index pour la table `album_imagepage`
--
ALTER TABLE `album_imagepage`
  ADD PRIMARY KEY (`id`),
  ADD KEY `album_imagepage_album_id_foreign` (`album_id`),
  ADD KEY `album_imagepage_imagepage_id_foreign` (`imagepage_id`);

--
-- Index pour la table `events`
--
ALTER TABLE `events`
  ADD PRIMARY KEY (`id`);

--
-- Index pour la table `imagepages`
--
ALTER TABLE `imagepages`
  ADD PRIMARY KEY (`id`);

--
-- Index pour la table `imagepage_paragraph`
--
ALTER TABLE `imagepage_paragraph`
  ADD PRIMARY KEY (`id`),
  ADD KEY `imagepage_paragraph_imagepage_id_foreign` (`imagepage_id`),
  ADD KEY `imagepage_paragraph_paragraph_id_foreign` (`paragraph_id`);

--
-- Index pour la table `infos`
--
ALTER TABLE `infos`
  ADD PRIMARY KEY (`id`);

--
-- Index pour la table `intros`
--
ALTER TABLE `intros`
  ADD PRIMARY KEY (`id`);

--
-- Index pour la table `migrations`
--
ALTER TABLE `migrations`
  ADD PRIMARY KEY (`id`);

--
-- Index pour la table `musics`
--
ALTER TABLE `musics`
  ADD PRIMARY KEY (`id`);

--
-- Index pour la table `pagemusics`
--
ALTER TABLE `pagemusics`
  ADD PRIMARY KEY (`id`);

--
-- Index pour la table `paragraphs`
--
ALTER TABLE `paragraphs`
  ADD PRIMARY KEY (`id`);

--
-- Index pour la table `password_resets`
--
ALTER TABLE `password_resets`
  ADD KEY `password_resets_email_index` (`email`);

--
-- Index pour la table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `users_email_unique` (`email`);

--
-- Index pour la table `videos`
--
ALTER TABLE `videos`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT pour les tables déchargées
--

--
-- AUTO_INCREMENT pour la table `albummusics`
--
ALTER TABLE `albummusics`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT pour la table `albummusic_music`
--
ALTER TABLE `albummusic_music`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT pour la table `albums`
--
ALTER TABLE `albums`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT pour la table `album_imagepage`
--
ALTER TABLE `album_imagepage`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT pour la table `events`
--
ALTER TABLE `events`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT pour la table `imagepages`
--
ALTER TABLE `imagepages`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT pour la table `imagepage_paragraph`
--
ALTER TABLE `imagepage_paragraph`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT pour la table `infos`
--
ALTER TABLE `infos`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT pour la table `intros`
--
ALTER TABLE `intros`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT pour la table `migrations`
--
ALTER TABLE `migrations`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT pour la table `musics`
--
ALTER TABLE `musics`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT pour la table `pagemusics`
--
ALTER TABLE `pagemusics`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT pour la table `paragraphs`
--
ALTER TABLE `paragraphs`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT pour la table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT pour la table `videos`
--
ALTER TABLE `videos`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- Contraintes pour les tables déchargées
--

--
-- Contraintes pour la table `albummusic_music`
--
ALTER TABLE `albummusic_music`
  ADD CONSTRAINT `albummusic_music_albummusic_id_foreign` FOREIGN KEY (`albummusic_id`) REFERENCES `albummusics` (`id`),
  ADD CONSTRAINT `albummusic_music_music_id_foreign` FOREIGN KEY (`music_id`) REFERENCES `musics` (`id`);

--
-- Contraintes pour la table `album_imagepage`
--
ALTER TABLE `album_imagepage`
  ADD CONSTRAINT `album_imagepage_album_id_foreign` FOREIGN KEY (`album_id`) REFERENCES `albums` (`id`),
  ADD CONSTRAINT `album_imagepage_imagepage_id_foreign` FOREIGN KEY (`imagepage_id`) REFERENCES `imagepages` (`id`);

--
-- Contraintes pour la table `imagepage_paragraph`
--
ALTER TABLE `imagepage_paragraph`
  ADD CONSTRAINT `imagepage_paragraph_imagepage_id_foreign` FOREIGN KEY (`imagepage_id`) REFERENCES `imagepages` (`id`),
  ADD CONSTRAINT `imagepage_paragraph_paragraph_id_foreign` FOREIGN KEY (`paragraph_id`) REFERENCES `paragraphs` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
